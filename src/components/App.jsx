import React from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Modal } from './Modal';
import { Loader } from './Loader';
import { fetchGallery } from './api';
import s from './Searchbar.module.css';

export class App extends React.Component {
  state = {
    items: [],
    total: 0,
    page: 1,
    loading: false,
    error: null,
    query: '',
    isOpen: false,
    content: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const { hits, totalHits } = await fetchGallery();
      this.setState({ items: hits, total: totalHits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      try {
        const { hits, totalHits } = await fetchGallery({
          page: this.state.page,
        });
        this.setState(prev => ({
          items: [...prev.items, ...hits],
          total: totalHits,
        }));
      } catch (error) {}
    }
  }

  handleToggleModal = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  handleSeeInfo = content => {
    this.setState({ isOpen: true, content });
  };
  handleSetQuery = query => {
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 12 }));
  };

  render() {
    const { items, loading, total, isOpen, content } = this.state;
    return (
      <div className={s.app}>
        <Searchbar handleSetQuery={this.handleSetQuery} />
        <ImageGallery openModal={this.handleSeeInfo} posts={items} />
        {loading && !items.length && <Loader />}
        {items.length && items.length < total ? (
          <Button onClick={this.handleLoadMore} />
        ) : null}
        {isOpen && (
          <Modal content={content} closeModal={this.handleToggleModal} />
        )}
      </div>
    );
  }
}
