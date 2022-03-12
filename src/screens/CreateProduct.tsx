import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import store from './store/store';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headTitle}>Upayments Store</Text>
    </SafeAreaView>
  );
};

export default App;
