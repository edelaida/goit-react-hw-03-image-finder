import React from 'react';
import s from './Searchbar.module.css';

export const Modal = ({ largeImageURL }) => {
  return (
    <div className="{s.overlay}">
      <div className={s.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
