import React from 'react';
import { Provider } from 'react-redux'

import store from './store'

import Menu from './src/components/Menu';

const App = () => {
  
  return (
    <Provider store={store}>
      <Menu />
    </Provider>
  )
}

export default App;
