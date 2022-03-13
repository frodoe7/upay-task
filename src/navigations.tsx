import * as React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootState} from './store/store';
import {navigationRef} from './RootNavigation';
import {useSelector} from 'react-redux';

// App Screens
import Home from './screens/Home';
import Product from './screens/Product';
import CreateProduct from './screens/CreateProduct';
import colors from './constants/colors';

const Stack = createNativeStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CreateProduct" component={CreateProduct} />
    </Stack.Navigator>
  );
};

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={colors.black} />
    </View>
  );
};

const Navigator = () => {
  const {loading} = useSelector((state: RootState) => state.app);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainScreens />
      {loading && <Loader />}
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
