// app.jsx

import { useState, useEffect } from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import { fetchImg } from './components/services/Api';
import './App.css';

import { ImageGallery } from './components/imageGallery/ImageGallery';
import { Loader } from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import LoadMoreButton from './components/loadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/imageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = item => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const searchImg = async newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImg([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImg(query, page);

        setImg(prevImg => [...prevImg, ...fetchedData.results]);

        setIsVisible(fetchedData.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={searchImg} />
      {error && <ErrorMessage />}
      {img.length > 0 && <ImageGallery items={img} openModal={openModal} />}
      {loading && <Loader />}
      {img.length > 0 && !loading && isVisible && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <Toaster position="bottom-center" />
      {modalIsOpen && selectedItem && (
        <ImageModal
          item={selectedItem}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
