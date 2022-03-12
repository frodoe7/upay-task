import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

// App Screens
import Home from './screens/Home';
import Product from './screens/Product';
import CreateProduct from './screens/CreateProduct';

const Stack = createNativeStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="CreateProduct" component={CreateProduct} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainScreens />
    </NavigationContainer>
  );
};

export default Navigator;
