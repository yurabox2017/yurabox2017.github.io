import React from 'react';
import ModalOverlay from './ModalOverlay';
import './Modal.css';
import IModal from '../../../entities/interfaces/IModal';

// const modalRoot = document.getElementById('root-modal');

function Modal({ visible, header = '', children, onClose }: IModal) {
  // return ReactDOM.createPortal(
  return (
    <>
      <div className="modal fade show modal-container" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header border border-0 bg-custom-black ">
              <h5 className="modal-title bg-custom-black text-dark pl-10">
                <p className="text text_type_main-large">{header}</p>
              </h5>
              <h2 className="text-dark" onClick={onClose} style={{ cursor: 'pointer' }}>
                &times;
              </h2>
            </div>
            <div className="modal-body bg-custom-black">{children}</div>
          </div>
        </div>
      </div>
      <ModalOverlay />
    </>
  );
  // ,
  // modalRoot
  // );
}

export default Modal;
