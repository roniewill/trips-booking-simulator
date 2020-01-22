import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
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
