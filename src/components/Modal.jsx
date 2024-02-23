import React from 'react';
import s from './Searchbar.module.css';

export const Modal = ({ content, closeModal }) => {
  return (
    <div onClick={closeModal} className={s.overlay}>
      <div className={s.modal}>
        <img src={content.largeImageURL} alt="" />
      </div>
    </div>
  );
};
