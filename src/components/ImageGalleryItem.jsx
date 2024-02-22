import React from 'react';
import s from './Searchbar.module.css';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className={s.imageGalleryItem}>
      <img className={s.imageGalleryItemImage} src={webformatURL} alt="" />
    </li>
  );
};
