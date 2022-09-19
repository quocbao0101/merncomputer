import { combineReducers } from 'redux';
import products from './modules/products/reducer';
import menu from './modules/menu/reducer';
import auth from './modules/auth/reducer';

const RootReducer = combineReducers({
    products,
    menu,
    auth,
})

export default RootReducer;