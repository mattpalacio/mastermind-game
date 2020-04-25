import React, { createContext, useState } from 'react';

import colors from '../data/colors';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [hasGameStarted, setHasGameStarted] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [colorCode, setColorCode] = useState([]);

  const startGame = () => {
    setIsGameOver(false);
    setHasGameStarted(true);
    setColorCode([]);
    generateCode();
  };

  const endGame = () => {
    setHasGameStarted(false);
    setIsGameOver(true);
  };

  const generateCode = () => {
    const colorsArray = Object.keys(colors);
    let randomColorsArray = [];
    let i = 0;

    //generate color code
    while (i < 4) {
      const randomIndex = Math.floor(Math.random() * (colorsArray.length - 0));
      const randomColor = colorsArray[randomIndex];

      randomColorsArray = [...randomColorsArray, randomColor];

      i++;

      setColorCode(randomColorsArray);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        hasGameStarted,
        isGameOver,
        colorCode,
        startGame,
        endGame,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
