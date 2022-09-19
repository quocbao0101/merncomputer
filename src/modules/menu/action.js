import {
    GET_MENU, GET_MENU_ERROR, GET_MENU_SUCCESS
} from './constant';

const getMenu = () => ({
    type: GET_MENU,
});

export const getMenuSuccess = (data) => ({
    type: GET_MENU_SUCCESS,
    data,
})

export default getMenu;