import React from 'react';

import styled from 'styled-components';

const GuessRowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }

  & > div {
    --size: 40px;

    width: var(--size);
    height: var(--size);

    &:not(:last-of-type) {
      margin-right: 0.75em;
    }
  }

  & > div:last-child {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Peg = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  transform: scale(1.05);
`;

const Hint = styled(Peg)`
  --size: 15px;

  width: var(--size);
  height: var(--size);
  border: ${(props) =>
    props.color ? `2px solid ${props.theme.main.black}` : 'none'};
`;

const GuessRow = (props) => {
  if (props.guess) {
    const {
      guess: { guess, hints },
    } = props;

    return (
      <GuessRowWrapper>
        {guess.map((guessItem, index) => (
          <Peg key={index} color={guessItem.hex} />
        ))}

        <div>
          <Hint color={hints[0]} />
          <Hint color={hints[1]} />
          <Hint color={hints[2]} />
          <Hint color={hints[3]} />
        </div>
      </GuessRowWrapper>
    );
  }
};

export default GuessRow;
