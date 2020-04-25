import React, { useContext } from 'react';

import styled from 'styled-components';

import { GameContext } from '../providers/gameProvider';

import GuessRow from './GuessRow';
import PegSlots from './PegSlots';
import BlankRow from './BlankRow';
import { GlobalContext } from '../providers/globalProvider';

const GuessBoardWrapper = styled.article`
  width: fit-content;
  padding: 2em;
  border-radius: 2em;
  border: 10px solid ${(props) => props.theme.main.bg};
  background: ${(props) => props.theme.main.bg};
  box-shadow: 8px 8px 16px #d9d7d1, -8px -8px 16px #ffffff,
    inset 8px 8px 16px #d9d7d1, inset -8px -8px 16px #ffffff;
  overflow: hidden;
  position: relative;

  & > div:first-of-type {
    padding: 2em;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`;

const BlankRows = () => {
  return (
    <>
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
      <BlankRow />
    </>
  );
};

const GuessBoard = () => {
  const { hasGameStarted } = useContext(GlobalContext);
  const { guesses, guess } = useContext(GameContext);

  return (
    <GuessBoardWrapper>
      <div>
        {guesses.length !== 0 &&
          guesses.map((guess, index) => <GuessRow key={index} guess={guess} />)}
        {hasGameStarted && guesses.length !== 12 && <PegSlots guess={guess} />}
      </div>

      <BlankRows />
    </GuessBoardWrapper>
  );
};

export default GuessBoard;
