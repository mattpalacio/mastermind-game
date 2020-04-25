import React from 'react';

import styled from 'styled-components';

const PegSlotsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    border: 2px dashed ${(props) => props.theme.main.accent};
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
  }
`;

const Peg = styled.div`
  --size: 40px;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  transform: scale(1.05);

  &:not(:last-of-type) {
    margin-right: 0.75em;
  }
`;

const PegSlots = ({ guess }) => {
  return (
    <PegSlotsWrapper>
      <Peg color={guess.length >= 1 ? guess[0].hex : ''} />
      <Peg color={guess.length >= 2 ? guess[1].hex : ''} />
      <Peg color={guess.length >= 3 ? guess[2].hex : ''} />
      <Peg color={guess.length >= 4 ? guess[3].hex : ''} />
      <Peg />
    </PegSlotsWrapper>
  );
};

export default PegSlots;
