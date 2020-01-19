import React from "react";
import Home from "./src/Views/Home"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Persist from './src/Redux/store'
import Routes from './src/Routes'

const persistStore = Persist();
export default class App extends React.Component {
  render() {
    
    return (
      <Provider store={ persistStore.store }>
        <PersistGate loading={null} persistor={ persistStore.persistor }>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}
