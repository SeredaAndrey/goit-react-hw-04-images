import React from 'react';
import PropTypes from 'prop-types';
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

ModalPicture.prototype = {
  URL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
