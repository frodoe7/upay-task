import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Navigation from './navigations';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
