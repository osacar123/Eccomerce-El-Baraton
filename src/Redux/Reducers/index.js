import { combineReducers } from 'redux';
import productsReducer from './prductsReducer'
import shopingCartReducer from './shoppingCartReducer'

export default combineReducers({
    productsReducer,
    shopingCartReducer
});
