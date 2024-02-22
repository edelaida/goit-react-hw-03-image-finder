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
    per_page: 0,
    loading: false,
    error: null,
    query: '',
    isOpen: false,
    content: null,
  };

  async componentDidMount() {
    try {
      const { hits, totalHits } = await fetchGallery();
      this.setState({ items: hits, total: totalHits });
    } catch (error) {
      this.setState({ error });
    }
  }

  handleLoadMore = () => {
    this.setState(prev => ({ per_page: prev.per_page + 12 }));
  };

  render() {
    const { items } = this.state;
    return (
      <div className={s.app}>
        <Searchbar />
        <ImageGallery posts={items} />
        <Button onClick={this.handleLoadMore} />
        <Modal />
        <Loader />
      </div>
    );
  }
}
