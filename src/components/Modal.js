import React from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ children }) => {
  const modalRoot = document.getElementById('modal');

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, modalRoot);
};

export default Modal;
