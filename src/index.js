import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import './config/ReactotronConfig';
import store from './store/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Provider>
    </>
  );
}
export default App;
