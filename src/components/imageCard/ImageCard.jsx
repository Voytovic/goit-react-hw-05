import css from './ImageCard.module.css';

export const ImageCard = ({ item, openModal }) => {
  const handleClick = () => {
    openModal(item);
  };

  return (
    <div className={css.imgItem}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.description}
        onClick={handleClick}
      />
    </div>
  );
};
