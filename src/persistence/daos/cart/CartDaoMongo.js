import { CarritosModel } from "../../../models/carritos.model.js";
import logger from "../../../utils/loggers/Log4jsLogger.js";
import MongoDAO from "../../classes/MongoDAO.js";
import { ProductosModel } from "../../../models/productos.model.js";

class CartDaoMongo extends MongoDAO {
  constructor() {
    super(CarritosModel);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new CartDaoMongo();
    }
    return this.instance;
  }

  async saveProductToCart(id, obj) {
    try {
      const cart = await CarritosModel.findById(id);
      cart.products.push(obj.productId);
      cart.save();
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  }

  async deleteCartById(cart_id) {
    try {
      const cart = await this.getById(cart_id);
      await this.model.updateOne(
        { _id: cart_id },
        { $set: { products: [], total: 0 } }
      );
      return cart;
    } catch (err) {
      throw new Error(err?.message);
    }
  }

  async getAllProductsFromCart(id) {
    try {
      return await CarritosModel.findById(id)
        .populate("products")
        .select({ products: 1, _id: 0 });
    } catch (error) {
      logger.error(error);
      return false;
    }
  }

  //TODO: set 'in_cart' property -1 on delete
  async deleteProductFromCart(id, productId) {
    try {
      const cart = await CarritosModel.findById(id);
      cart.products.remove(productId);
      cart.save();
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  }

  async deleteProductOfAllCartsById(product_id) {
    try {
      const product = await ProductosModel.findById(product_id);
      await this.model.updateMany({ $pull: { products: { _id: product_id } } });
      return product;
    } catch (err) {
      throw new Error(err?.message);
    }
  }
}

export default CartDaoMongo;

// VIEJO

// export async function createCart() {
//   try {
//     return await CarritosModel.create({});
//   } catch (error) {
//     logger.error(error);
//     return false;
//   }
// }

// export async function deleteCartById(id) {
//   try {
//     return await CarritosModel.findByIdAndDelete({ _id: id });
//   } catch (error) {
//     logger.error(error);
//     return false;
//   }
// }

// export async function saveProductToCart(id, obj) {
//   try {
//     const cart = await CarritosModel.findById(id);
//     cart.products.push(obj.productId);
//     cart.save();
//     return true;
//   } catch (error) {
//     logger.error(error);
//     return false;
//   }
// }

// export async function deleteProductFromCart(id, productId) {
//   try {
//     const cart = await CarritosModel.findById(id);
//     cart.products.remove(productId);
//     cart.save();
//     return true;
//   } catch (error) {
//     logger.error(error);
//     return false;
//   }
// }

// export async function getAllProductsFromCart(id) {
//   try {
//     return await CarritosModel.findById(id)
//       .populate("products")
//       .select({ products: 1, _id: 0 });
//   } catch (error) {
//     logger.error(error);
//     return false;
//   }
// }
