import { createCart, deleteCartById, saveProductToCart, deleteProductFromCart, getAllProductsFromCart } from '../persistence/daos/cart.dao.js';

export class CartService {

    async createCart() {
        return createCart()
    }
    
    async deleteCartById(id) {
        return deleteCartById(id)
    }

    async saveProductToCart(id, obj) {
        return saveProductToCart(id, obj)
    }
    
    async deleteProductFromCart(id, productId) {
        return deleteProductFromCart(id, productId)
    }
    
    async getAllProductsFromCart(id) {
        return getAllProductsFromCart(id)
    }
}