import React, { useContext } from 'react';

import styled from 'styled-components';

import { GlobalContext } from '../providers/globalProvider';
import { GameContext } from '../providers/gameProvider';

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1em 1.5em;
  border-radius: 0 0 1em 1em;
  margin-bottom: 2em;
  box-shadow: 0 2px 4px hsl(45, 10%, 84%), 0 4px 8px hsl(45, 10%, 89%),
    0 8px 16px hsl(45, 10%, 94%);
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0.6em 1.8em;
  border: 2px solid ${(props) => props.theme.main.fg};
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform ease-in-out 80ms;

  &:first-of-type {
    border: 2px solid
      ${(props) =>
        props.isDanger ? props.theme.main.danger : props.theme.main.accent};
    margin-left: auto;
    background: ${(props) =>
      props.isDanger
        ? props.theme.main.gradientDanger
        : props.theme.main.gradientAccent};
    color: ${(props) =>
      props.isDanger ? props.theme.main.bg : props.theme.main.fg};
  }

  &:last-of-type {
    border: 2px solid ${(props) => props.theme.main.fg};
    background: transparent;
    color: ${(props) => props.theme.main.fg};
    margin-left: 0.5em;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Header = ({ toggleModal }) => {
  const { hasGameStarted, startGame, endGame } = useContext(GlobalContext);
  const { resetBoard } = useContext(GameContext);

  return (
    <HeaderWrapper>
      <h1>Mastermind</h1>
      {!hasGameStarted ? (
        <StyledButton
          onClick={() => {
            startGame();
            resetBoard();
          }}>
          Play Game
        </StyledButton>
      ) : (
        <StyledButton isDanger onClick={endGame}>
          End Game
        </StyledButton>
      )}

      <StyledButton onClick={toggleModal}>Rules</StyledButton>
    </HeaderWrapper>
  );
};

export default Header;
