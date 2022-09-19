import { apiBase } from "./instance";

const getProductPagination = (data) => apiBase({
    url: '/products/pagination',
    method: 'POST',
    data
});

const getProduct = () => apiBase({
    url: '/products',
    method: 'GET',
})

const productService = {
    getProductPagination,
    getProduct
}

export default productService;