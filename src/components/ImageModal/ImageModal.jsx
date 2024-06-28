import { useRef } from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, image }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!image) return null;

  return (
    <Modal
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      onClick={handleOutsideClick}
    >
      <div ref={modalRef}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
