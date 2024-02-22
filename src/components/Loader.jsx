import React from 'react';
import s from './Searchbar.module.css';

export const Loader = ({ webformatURL }) => {
  return (
    <div class="overlay">
      <div className={s.modal}>
        <img src={webformatURL} alt="" />
      </div>
    </div>
  );
};
