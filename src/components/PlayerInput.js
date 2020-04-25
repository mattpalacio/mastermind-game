import React, { useContext } from 'react';

import styled from 'styled-components';

import colors from '../data/colors';

import { GameContext } from '../providers/gameProvider';
import { GlobalContext } from '../providers/globalProvider';

const PlayerInputWrapper = styled.article`
  width: fit-content;
  padding: 2em;
  border-radius: 1em;
  margin-bottom: 2em;
  background: ${(props) => props.theme.main.bg};
  box-shadow: 8px 8px 16px #d9d7d1, -8px -8px 16px #ffffff;
`;

const PegsWrapper = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1em;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  grid-template-rows: repeat(2, minmax(80px, 1fr));
  grid-gap: 0.5em;
  filter: ${(props) => !props.hasGameStarted && 'grayscale(100%)'};
`;

const Peg = styled.div`
  width: 100%;
  background-color: ${(props) => props.color};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;

  & > button {
    width: 100%;
    padding: 0.5em;
    border-radius: 0.5em;

    font-size: 1rem;
    cursor: pointer;
    transition: transform ease-in-out 80ms;

    &:first-of-type {
      margin-right: 0.5em;
    }

    &:nth-child(1) {
      border: 2px solid ${(props) => props.theme.main.accent};
      background: ${(props) => props.theme.main.gradientAccent};
      color: ${(props) => props.theme.main.fg};
    }
    &:nth-child(2) {
      border: 2px solid ${(props) => props.theme.main.danger};
      background: ${(props) => props.theme.main.gradientDanger};
      color: ${(props) => props.theme.main.white};
    }

    &:active {
      transform: scale(0.95);
    }

    &:disabled {
      border: 2px solid ${(props) => props.theme.main.fg};
      background: ${(props) => props.theme.main.gradientFg};
      color: ${(props) => props.theme.main.white};
      cursor: default;
    }
  }
`;

const PegInputs = () => {
  const { colorCode, hasGameStarted } = useContext(GlobalContext);
  const { guess, addPeg, clearPegs, guessCode } = useContext(GameContext);

  const Pegs = () => {
    const pegs = Object.keys(colors).map((color) => {
      return { color, hex: colors[color] };
    });

    return (
      <PegsWrapper hasGameStarted={hasGameStarted}>
        {pegs.map((peg) => (
          <Peg
            key={peg.color}
            isDisabled={hasGameStarted === false}
            color={peg.hex}
            onClick={() => addPeg(peg)}
          />
        ))}
      </PegsWrapper>
    );
  };

  const Buttons = () => {
    return (
      <ButtonsWrapper>
        <button
          disabled={!hasGameStarted || guess.length !== colorCode.length}
          onClick={guessCode}>
          Decode
        </button>

        <button
          disabled={!hasGameStarted || guess.length <= 0}
          onClick={clearPegs}>
          Clear
        </button>
      </ButtonsWrapper>
    );
  };

  return (
    <PlayerInputWrapper>
      <Pegs />
      <Buttons />
    </PlayerInputWrapper>
  );
};

export default PegInputs;
