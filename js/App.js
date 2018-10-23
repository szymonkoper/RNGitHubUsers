import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './navigator';
import store from './redux/store';

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
