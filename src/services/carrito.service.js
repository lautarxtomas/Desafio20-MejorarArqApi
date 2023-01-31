import { CarritosModel } from '../models/carritos.model.js';
import logger from "../utils/loggers/Log4jsLogger.js";

import { createCart, deleteCartById, saveProductToCart, deleteProductFromCart, getAllProductsFromCart } from '../persistence/cart.js';

export class CarritoService {

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