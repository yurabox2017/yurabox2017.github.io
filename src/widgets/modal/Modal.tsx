import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay';
import './Modal.css';
import IModal from 'src/Interfaces/IModal';

const modalRoot = document.getElementById('root-modal');

function Modal({ visible, header = '', children, onClose }: IModal) {
  return visible
    ? ReactDOM.createPortal(
        <>
          <div className="modal fade show modal-container" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document">
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
        </>,
        modalRoot
      )
    : null;
}

export default Modal;
