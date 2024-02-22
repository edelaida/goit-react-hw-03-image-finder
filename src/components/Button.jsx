import React from 'react';
import s from './Searchbar.module.css';

export const Button = () => {
  return (
    <div>
      <button className={s.buttonLoad} type="submit">
        Load more
      </button>
    </div>
  );
};
