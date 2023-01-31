import { ProductDAO } from "../persistence/index.js";
import CarritoService from "./carrito.service.js";

class ProductoService {
  static async exists(id) {
    try {
      return await ProductDAO.exists(id);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async getAllProducts() {
    try {
      return ProductDAO.getAll();
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async getProductById(objectId) {
    try {
      return await ProductDAO.getById(objectId);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async createProduct(object) {
    try {
      return await ProductDAO.create(object);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async updateProductById(id, object) {
    try {
      return await ProductDAO.updateById(id, object);
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async deleteProductById(id) {
    try {
      await CarritoService.deleteProductsOfAllCartsById(id);
      return await ProductDAO.deleteById(id);
    } catch (err) {
      throw new Error(err?.message);
    }
  }
}

export default new ProductoService()
