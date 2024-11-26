import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay';
import './Modal.css';
import IModal from 'src/entities/interfaces/IModal';

const modalRoot = document.getElementById('root-modal');

function Modal({ visible, header = '', children, onClose }: IModal) {
  return visible
    ? ReactDOM.createPortal(
        <>
          <div className="modal fade show modal-container" role="dialog">
            <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{header}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={onClose}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
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
