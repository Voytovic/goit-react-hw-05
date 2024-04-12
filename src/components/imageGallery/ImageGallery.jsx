import { ImageCard } from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items, openModal }) => (
  <ul className={css.gallery}>
    {items.map(item => (
      <li className={css.galleryItem} key={item.id}>
        <ImageCard item={item} openModal={() => openModal(item)} />
      </li>
    ))}
  </ul>
);
