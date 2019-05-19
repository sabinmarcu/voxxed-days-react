import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';

export default () => (
  <>
    <div className="section">
      <Link to="/new" className="btn">Add movie</Link>
      <SearchForm />
    </div>
    <MovieList />
  </>
);
