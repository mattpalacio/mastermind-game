import React, { useContext, useState, useLayoutEffect } from 'react';

import styled from 'styled-components';

import { GlobalContext } from '../providers/globalProvider';
import { GameContext } from '../providers/gameProvider';

import colors from '../data/colors';

const GameStatusWrapper = styled.article`
  max-width: 320px;
  padding: 0 1em;
  font-size: 1.3rem;
  line-height: 1.7;

  span:not([role='img']) {
    padding: 0.1em 0.5em;
    border-radius: 0.2em;
    background: ${(props) => props.theme.main.accent};
    font-size: 1.1rem;
  }
`;

const SecretCodeWrapper = styled.div`
  width: 100%;
  padding: 0.5em;
  border: 2px dashed ${(props) => props.theme.main.accent};
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-around;
`;

const Code = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const GameStatus = () => {
  const { colorCode, hasGameStarted, isGameOver } = useContext(GlobalContext);
  const { guesses, hasPlayerWon } = useContext(GameContext);
  const [gameStatus, setGameStatus] = useState('');

  useLayoutEffect(() => {
    if (hasGameStarted) {
      guesses.length === 0
        ? setGameStatus(`Game has started. Good luck and have fun! 😁`)
        : setGameStatus(
            ` ${
              12 - guesses.length === 1
                ? `This is your last attempt. `
                : `You have ${12 - guesses.length} attempts left`
            }`
          );
    } else if (isGameOver) {
      hasPlayerWon
        ? setGameStatus(`You broke the secret code! Thanks for playing. 🏆`)
        : setGameStatus(`Game over. You failed. 💀`);
    }
  }, [guesses, hasGameStarted, isGameOver, hasPlayerWon, setGameStatus]);

  const SecretCode = () => {
    return (
      <SecretCodeWrapper>
        {colorCode.map((code) => (
          <Code color={colors[code]} />
        ))}
      </SecretCodeWrapper>
    );
  };

  return (
    <GameStatusWrapper>
      {gameStatus ? (
        <>
          <p>{gameStatus}</p>
          {isGameOver && (
            <>
              <p>
                Would you like to play again? Press <span>Play Game</span> to
                start another game.
              </p>
              <p>The secret code is: </p>
              <SecretCode />
            </>
          )}
        </>
      ) : (
        <p>
          Welcome to the classic code-breaking game! <br /> Press{' '}
          <span>Play Game</span> to start a new game.{' '}
          <span role="img" aria-label="smiling face">
            😊
          </span>
        </p>
      )}
    </GameStatusWrapper>
  );
};

export default GameStatus;
