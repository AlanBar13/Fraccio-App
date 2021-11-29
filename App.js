import React from 'react';
import { Provider } from 'react-redux'
import { NativeBaseProvider } from 'native-base';

import store from './store'

import Menu from './src/components/Menu';

const App = () => {
  
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Menu />
      </Provider>
    </NativeBaseProvider>
  )
}

export default App;
