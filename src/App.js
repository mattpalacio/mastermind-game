import React, { useState } from 'react';

import styled from 'styled-components';

import GameContextProvider from './providers/gameProvider';

import Header from './components/Header';
import Game from './components/Game';
import Rules from './components/Rules';

const AppWrapper = styled.main`
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 100vh;
  margin: auto;
  background: ${(props) => props.theme.main.bg};
  position: relative;
  display: flex;
  flex-direction: column;
  filter: ${(props) => props.isModalOpen && 'blur(2px)'};
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <AppWrapper isModalOpen={isModalOpen}>
      <GameContextProvider>
        <Header toggleModal={toggleModal} />
        <Game />
      </GameContextProvider>
      {isModalOpen && <Rules toggleModal={toggleModal}></Rules>}
    </AppWrapper>
  );
}

export default App;
