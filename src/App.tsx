import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Navigation from './navigations';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
