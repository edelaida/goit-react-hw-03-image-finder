import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import s from './Searchbar.module.css';

export const ImageGallery = ({ posts }) => {
  return (
    <div>
      <ul className={s.imageGallery}>
        {posts.map(post => (
          <ImageGalleryItem key={post.id} {...post} />
        ))}
      </ul>
    </div>
  );
};
