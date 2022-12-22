import React from 'react';
import { Modal, Overlay } from './modal.styled';

const ModalPicture = ({ URL, tags, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal>
        <img src={URL} alt={tags} />
      </Modal>
    </Overlay>
  );
};
export default ModalPicture;
