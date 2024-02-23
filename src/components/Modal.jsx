import React from 'react';
import s from './Searchbar.module.css';

export class Modal extends React.Component {
  intervalId = null;
  timeoutId = null;

  componentDidMount() {
    document.body.style.overflowY = 'hidden';
    document.addEventListener('keydown', this.handleKeyDown);
    this.timeoutId = setTimeout(() => {}, 3000);

    this.intervalId = setInterval(() => {
      // console.log(new Date().toLocaleTimeString())
    }, 1000);
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'auto';

    document.removeEventListener('keydown', this.handleKeyDown);
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
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
