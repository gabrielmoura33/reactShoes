/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import globals from './styles/global';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: () => <Header {...navigation} />,
        cardStyle: {
          backgroundColor: globals.dark,
        },
      }),
    },
  ),
);

export default Routes;
