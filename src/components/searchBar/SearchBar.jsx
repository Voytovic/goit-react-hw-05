import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { TbPhotoSearch } from 'react-icons/tb';
import { useState } from 'react';

export const SearchBar = ({ onSubmit, setCurrentIndex }) => {
  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === '') {
      toast.error('Please enter a request');
      return;
    }

    onSubmit(e.target.elements.query.value);
    e.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchBar}
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <TbPhotoSearch size="25" />
        </button>
      </form>
    </header>
  );
};
