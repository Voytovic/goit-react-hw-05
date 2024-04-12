import css from './ImageModal.module.css';
import Modal from 'react-modal';

export const ImageModal = ({ item, isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '750px',
      height: '750px',
      overflow: 'hidden',
      backgroundColor: '',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(43, 88, 84, 0.678)',
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div className={css.wrapper}>
        <img
          className={css.img}
          src={item.urls.regular}
          alt={item.description}
        />
      </div>
    </Modal>
  );
};
