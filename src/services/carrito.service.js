import { CartDAO } from "../persistence/index.js";

class CarritoService {
  async createCart(cart) {
    try {
      return await CartDAO.create(cart);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async deleteCartById(id) {
    try {
      return await CartDAO.deleteCartById(id);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async saveProductToCart(id, obj) {
    try {
      return await CartDAO.saveProductToCart(id, obj);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async deleteProductFromCart(id, productId) {
    try {
      return await CartDAO.deleteProductFromCart(id, productId);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async getAllProductsFromCart(id) {
    try {
      return await CartDAO.getAllProductsFromCart(id);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async deleteProductOfAllCartsById(prod_id) {
    try {
      return await CartDAO.deleteProductOfAllCartsById(prod_id);
    } catch (err) {
      throw new Error(err?.message);
    }
  }
}

export default new CarritoService()
