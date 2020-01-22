import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { Header } from './components';
import Routes from './routes';

import { history } from './services';
import store from './store/';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <div className="container">
          <Routes />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
