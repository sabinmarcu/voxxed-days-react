/* eslint-disable jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */

import React from 'react';
import { Observer, useObservable } from 'mobx-react-lite';
import SearchIcon from 'mdi-react/SearchIcon';
import Stores from '../mobx/stores';

const SearchForm = () => {
  const store = useObservable(Stores.Movies);
  return (
    <div className="search input-field">
      <SearchIcon className="material-icons prefix" />
      <Observer>
        {() => (
          <input
            type="text"
            className="validate"
            id="search"
            value={store.query}
            onChange={store.updateQuery}
          />
        )}
      </Observer>
    </div>
  );
};

export default SearchForm;
