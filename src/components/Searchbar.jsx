import React from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends React.Component {
  state = {
    searchValue: '',
  };

  handleChangeValue = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSetQuery(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.searchForm}>
          <button type="submit" className={s.searchFormButton}>
            Search
          </button>

          <input
            className={s.searchFormInput}
            value={this.state.searchValue}
            onChange={this.handleChangeValue}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
