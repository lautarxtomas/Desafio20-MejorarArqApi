import "../configs/db.config.js";
import { ProductosModel } from "../models/productos.model.js";
import logger from "../utils/loggers/Log4jsLogger.js";


    export async function exists(id) {
        try {
            return await ProductosModel.findById(id);
        } catch (error) {
            logger.error(error);
        }
    }

    export async function getAll() {
        try {
            return await ProductosModel.find();
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
    
    export async function getProductById(objectId) {
        try {
            const product = await ProductosModel.findOne({
                _id : objectId
            })
            return product;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
    
    export async function createProduct(object) {
        try {
            return await ProductosModel.create(object)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
    
    export async function updateProductById(id, object) {
        try {
            await ProductosModel.findByIdAndUpdate(
                {
                    _id : id
                },
                object, 
                {
                    runValidators: true
                })
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
    
    export async function deleteProductById(id) {
        try {
            return await ProductosModel.findByIdAndDelete({_id: id})
        } catch (error) {
            logger.error(error);
            return false;
        }
    }