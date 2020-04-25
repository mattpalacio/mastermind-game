import React, { createContext, useContext, useState, useEffect } from 'react';

import { GlobalContext } from './globalProvider';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const { hasGameStarted, colorCode, endGame } = useContext(GlobalContext);
  const [guess, setGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [hasPlayerWon, setHasPlayerWon] = useState(false);

  const addPeg = (color) => {
    if (!hasGameStarted || guess.length >= colorCode.length) return;

    setGuess([...guess, color]);
  };

  const clearPegs = () => {
    setGuess([]);
  };

  const resetBoard = () => {
    setHasPlayerWon(false);
    setGuess([]);
    setGuesses([]);
  };

  const guessCode = () => {
    let blackHints = [];
    let whiteHints = [];
    let hints = [];

    if (guess.length !== colorCode.length) return;

    // check for pegs of the same color and position
    const mappedguess = guess.map((guess) => guess.color);

    colorCode.forEach((code, index) => {
      if (code === mappedguess[index]) blackHints = [...blackHints, 'black'];
    });

    if (blackHints.length === colorCode.length) {
      hints = [...blackHints];

      setGuesses([...guesses, { guess, hints }]);

      clearPegs();

      setHasPlayerWon(true);

      return;
    }

    //check for pegs of the same color in the colorCode
    colorCode.forEach((code) => {
      const guessItemIndex = mappedguess.indexOf(code);

      if (guessItemIndex >= 0) {
        mappedguess.splice(guessItemIndex, 1);
        whiteHints = [...whiteHints, 'white'];
      }
    });

    //compute for total number of white hints
    let i = 0;

    while (i < blackHints.length) {
      whiteHints.pop();
      i++;
    }

    hints = [...blackHints, ...whiteHints];

    setGuesses([...guesses, { guess, hints }]);

    clearPegs();
  };

  useEffect(() => {
    if (hasPlayerWon || guesses.length === 12) endGame();
  }, [guesses, endGame, hasPlayerWon]);

  return (
    <GameContext.Provider
      value={{
        guess,
        guesses,
        hasPlayerWon,
        addPeg,
        clearPegs,
        resetBoard,
        guessCode,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
