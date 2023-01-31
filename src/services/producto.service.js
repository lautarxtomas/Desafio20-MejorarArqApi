import { exists, getAll, getProductById, createProduct, updateProductById, deleteProductById } from "../persistence/product.js";

export class ProductoService {

    static async exists(id) {
        return exists(id);

        // try {
        //     return await ProductosModel.findById(id);
        // } catch (error) {
        //     logger.error(error);
        // }
    }

    async getAll() {
        return getAll()
        // try {
        //     return await ProductosModel.find();
        // } catch (error) {
        //     logger.error(error);
        //     return false;
        // }
    }
    
    async getProductById(objectId) {
        return getProductById(objectId)
        // try {
        //     const product = await ProductosModel.findOne({
        //         [this.ID_FIELD] : objectId
        //     })
        //     return product;
        // } catch (error) {
        //     logger.error(error);
        //     return false;
        // }
    }
    
    async createProduct(object) {
        return createProduct(object)
        // try {
        //     return await ProductosModel.create(object)
        // } catch (error) {
        //     logger.error(error);
        //     return false;
        // }
    }
    
    async updateProductById(id, object) {
        return updateProductById(id, object)
        // try {
        //     await ProductosModel.findByIdAndUpdate(
        //         {
        //             [this.ID_FIELD] : id
        //         },
        //         object, 
        //         {
        //             runValidators: true
        //         })
        //     return true;
        // } catch (error) {
        //     logger.error(error);
        //     return false;
        // }
    }
    
    async deleteProductById(id) {
        return deleteProductById(id)
        // try {
        //     return await ProductosModel.findByIdAndDelete({[this.ID_FIELD]: id})
        // } catch (error) {
        //     logger.error(error);
        //     return false;
        // }
    }
    
}