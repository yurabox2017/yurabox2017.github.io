import './ModalOverlay.css'
function ModalOverlay({ isOpen, setOpen }) {
    return (
        <div
            className="modal-backdrop fade show modal-overlay"
            onClick={() => setOpen(false)}>

        </div>
    );
}

export default ModalOverlay;