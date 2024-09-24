function ModalOverlay({ isOpen, setOpen }) {
    return (
        <div
            className="modal-backdrop fade show"
            onClick={() => setOpen(false)}
            style={{ opacity: 0.6 }}
        ></div>
    );
}

export default ModalOverlay;