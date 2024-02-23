import React from 'react';
import s from './Searchbar.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  openModal,
  largeImageURL,
}) => {
  return (
    <li
      onClick={() => openModal({ id, webformatURL, largeImageURL })}
      className={s.imageGalleryItem}
    >
      <img className={s.imageGalleryItemImage} src={webformatURL} alt="" />
    </li>
  );
};
