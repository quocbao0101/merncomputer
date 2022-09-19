import { combineReducers } from 'redux';
import products from './modules/products/reducer';
import menu from './modules/menu/reducer';
import auth from './modules/auth/reducer';
import user from './modules/users/reducer';

const RootReducer = combineReducers({
    products,
    menu,
    user,
    auth,
})

export default RootReducer;