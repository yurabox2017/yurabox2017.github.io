import React, { useState } from "react";
import Modal from "./modals/Modal";

function ShowModalButton() {
    const [visible, setVisible] = useState(false);
    const [inputText, setInputText] = useState('');

    const openModal = () => {
        setVisible(true);
    }
    const closeModal = () => {
        setVisible(false);
    }
    const modal = (
        <Modal header={inputText} visible={visible} onClose={closeModal} >
            <div>aaaaa</div>
        </Modal>
    )

    return (
        <div className="vstack gap-3">
            <input className="form-control" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button className="btn btn-primary" onClick={openModal}>Открыть окно</button>
            {visible && modal}
        </div>
    )
}

export default ShowModalButton;