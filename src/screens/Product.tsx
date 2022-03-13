import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './styles';

const App = ({navigation, route}) => {
  const trunc = (val: string, limit: number) => {
    return val.length > limit ? val.substring(0, limit) + '..' : val;
  };

  return (
    <SafeAreaView style={styles.productContainer}>
      <Image style={styles.image} source={{uri: route.params.avatar}} />
      <View style={styles.infoModal}>
        <View style={styles.paddedRow}>
          <Text style={styles.infoTitle}>{trunc(route.params.name, 24)}</Text>
          <Text style={styles.infoLabel}>${route.params.price}</Text>
        </View>

        <Text style={styles.infoDesc}>{route.params.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
