import { CartModel } from "../models/cart.model.js";
import logger from "../../utils/loggers/Log4jsLogger.js";

export async function createCart() {
  try {
    return await CartModel.create({});
  } catch (error) {
    logger.error(error);
    return false;
  }
}

export async function deleteCartById(id) {
  try {
    return await CartModel.findByIdAndDelete({ _id: id });
  } catch (error) {
    logger.error(error);
    return false;
  }
}

export async function saveProductToCart(id, obj) {
  try {
    const cart = await CartModel.findById(id);
    cart.products.push(obj.productId);
    cart.save();
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
}

export async function deleteProductFromCart(id, productId) {
  try {
    const cart = await CartModel.findById(id);
    cart.products.remove(productId);
    cart.save();
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
}

export async function getAllProductsFromCart(id) {
  try {
    return await CartModel.findById(id)
      .populate("products")
      .select({ products: 1, _id: 0 });
  } catch (error) {
    logger.error(error);
    return false;
  }
}
