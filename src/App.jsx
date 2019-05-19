import React from 'react';
import { Provider } from 'mobx-react';
import {
 BrowserRouter as Router, Route, Switch, Link 
} from 'react-router-dom';
import stores from './mobx/stores';
import ListRoute from './routes/List';
import FormRoute from './routes/Form';
import DevTools from './devtools';

function App() {
  return (
    <Provider {...stores}>
      <Router>
        <div className="App">
          <nav>
            <div className="nav-wrapper indigo darken-1">
              <div className="container">
                <Link to="/" className="brand-logo">Movies App</Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              component={ListRoute}
            />
            <Route
              exact
              path="/new"
              component={FormRoute}
            />
            <Route
              exact
              path="/edit/:id"
              component={FormRoute}
            />
          </Switch>
          <DevTools />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
