import React from 'react';
import s from './Searchbar.module.css';

export class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div onClick={this.handleBackdropClick} className={s.overlay}>
        <div className={s.modal}>
          <img src={this.props.content.largeImageURL} alt="" />
          {this.props.children}
        </div>
      </div>
    );
  }
}

//this.props.closeModal
