import React from 'react';
import s from './Searchbar.module.css';

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.buttonLoad} type="submit">
      Load more
    </button>
  );
};
