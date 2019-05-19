import React from 'react';
import { Provider } from 'mobx-react';
import MovieList from './components/MovieList';
import stores from './mobx/stores';

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <nav>
          <div className="nav-wrapper indigo darken-1">
            <div className="container">
              <span className="brand-logo">Movies App</span>
            </div>
          </div>
        </nav>
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
