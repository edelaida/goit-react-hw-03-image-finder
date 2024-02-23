import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import s from './Searchbar.module.css';

export const ImageGallery = ({ posts, openModal }) => {
  return (
    <div>
      <ul className={s.imageGallery}>
        {posts.map(post => (
          <ImageGalleryItem key={post.id} {...post} openModal={openModal} />
        ))}
      </ul>
    </div>
  );
};
