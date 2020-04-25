import React from 'react';

import styled from 'styled-components';

import GuessBoard from './GuessBoard';
import PlayerInput from './PlayerInput';
import GameStatus from './GameStatus';

const GameWrapper = styled.article`
  width: 100%;
  padding: 0 1.5em 2em;
  display: flex;
  justify-content: space-around;

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Game = () => {
  return (
    <GameWrapper>
      <GuessBoard />
      <div>
        <PlayerInput />
        <GameStatus />
      </div>
    </GameWrapper>
  );
};

export default Game;
