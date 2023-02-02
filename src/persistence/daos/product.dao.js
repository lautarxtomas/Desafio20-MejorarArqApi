import "../../configs/db.config.js";
import { ProductModel } from "../models/product.model.js";
import logger from "../../utils/loggers/Log4jsLogger.js";


    export async function exists(id) {
        try {
            return await ProductModel.findById(id);
        } catch (error) {
            logger.error(error);
        }
    }

    export async function getAll() {
        try {
            return await ProductModel.find();
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
    
    export async function getProductById(objectId) {
        try {
            const product = await ProductModel.findOne({
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
            return await ProductModel.create(object)
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
    
    export async function updateProductById(id, object) {
        try {
            await ProductModel.findByIdAndUpdate(
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
            return await ProductModel.findByIdAndDelete({_id: id})
        } catch (error) {
            logger.error(error);
            return false;
        }
    }