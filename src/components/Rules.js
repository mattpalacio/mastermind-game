import React, { useRef } from 'react';

import styled from 'styled-components';

import Modal from './Modal';
import { useClickOutsideElement } from '../hooks/useClickOutsideElement';

const RulesWrapper = styled.article`
  max-width: 400px;
  border-radius: 1em;
  padding: 2em;
  background-color: ${(props) => props.theme.main.bg};
  box-shadow: 0 0 10px hsl(45, 10%, 74%), 0 0 20px hsl(45, 10%, 79%),
    0 0 40px hsl(45, 10%, 84%);

  h1,
  ul,
  p:not(:last-of-type) {
    line-height: 1.4;
    margin-bottom: 1em;
  }

  h1 {
    text-align: center;
  }

  ul {
    padding-left: 1em;
  }
`;

const Rules = ({ toggleModal }) => {
  const RulesRef = useRef(null);

  useClickOutsideElement([RulesRef], toggleModal);

  return (
    <Modal>
      <RulesWrapper ref={RulesRef}>
        <h1>
          Rules{' '}
          <span role="img" aria-label="scroll of text">
            🧾
          </span>
        </h1>
        <p>
          The objective of the game is to guess the computer-generated
          four-color secret code. The secret code is a combination of any of the
          six colors available and may consist of multiples of the same color.
        </p>
        <p>
          Every time a player tries to decode the secret code, the computer will
          generate hints for that particular guess that the player has made.
        </p>
        <ul>
          <li>
            Black hint indicates a player-input color is of the right color and
            in the right position.
          </li>
          <li>
            White hint indicates a player-input color is of the right color but
            in the wrong position.
          </li>
          <li>
            No hint indicates a player-input color does not appear in the secret
            code.
          </li>
        </ul>
        <p>
          Note: Hint placement is not indicative of the player-input color
          position in the secret code.
        </p>
      </RulesWrapper>
    </Modal>
  );
};

export default Rules;
