import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';  
import  reducers from './Reducers/index';
import reduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    let store = createStore(persistedReducer, {},applyMiddleware(reduxThunk) )
    let persistor = persistStore(store)
    return { store, persistor }
  }


