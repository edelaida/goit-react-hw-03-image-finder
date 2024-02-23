import React from 'react';
import s from './Searchbar.module.css';
import { Comment } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={s.loader}>
      <Comment
        visible={true}
        height="180"
        width="180"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};
