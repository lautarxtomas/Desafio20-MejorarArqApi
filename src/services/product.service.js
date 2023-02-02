import { exists, getAll, getProductById, createProduct, updateProductById, deleteProductById } from "../persistence/daos/product.dao.js";

export class ProductService {

    static async exists(id) {
        return exists(id);
    }

    async getAll() {
        return getAll()
    }
    
    async getProductById(objectId) {
        return getProductById(objectId)
    }
    
    async createProduct(object) {
        return createProduct(object)
    }
    
    async updateProductById(id, object) {
        return updateProductById(id, object)
    }
    
    async deleteProductById(id) {
        return deleteProductById(id)
    }
    
}