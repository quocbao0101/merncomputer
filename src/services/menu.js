import { apiBase } from "./instance";


const getMenu = () => apiBase({
    url: '/menu',
    method: 'GET',
})

const menuService = {
    getMenu,
}

export default menuService;