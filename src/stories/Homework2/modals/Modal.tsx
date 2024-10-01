import React from 'react';
import ModalOverlay from "./ModalOverlay";
import './Modal.css';
import IModal from '../Interfaces/IModal';

function Modal({ visible, children }: IModal) {
    return (
        <>
            <div
                className="modal fade show modal-container"
                role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header border border-0 bg-custom-black ">
                            <h5 className="modal-title bg-custom-black text-white pl-10">
                                <p className="text text_type_main-large"></p>
                            </h5>
                            <h2 className="text-dark">
                                &times;
                            </h2>
                        </div>
                        <div className="modal-body bg-custom-black">{children}</div>
                    </div>
                </div>
            </div>
            <ModalOverlay />
        </>
    )
}

export default Modal;