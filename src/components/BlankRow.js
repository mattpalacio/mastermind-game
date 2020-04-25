import React from 'react';

import styled from 'styled-components';

const PegSlotsWrapper = styled.div`
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
  border: 2px solid hsl(45, 10%, 89%);
`;

const Hint = styled(Peg)`
  --size: 15px;

  width: var(--size);
  height: var(--size);
  border: 2px dotted hsl(45, 10%, 89%);
`;

const BlankRow = () => {
  return (
    <PegSlotsWrapper>
      <Peg />
      <Peg />
      <Peg />
      <Peg />
      <div>
        <Hint></Hint>
        <Hint></Hint>
        <Hint></Hint>
        <Hint></Hint>
      </div>
    </PegSlotsWrapper>
  );
};

export default BlankRow;
