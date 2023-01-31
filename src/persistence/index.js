// Memory DAO
import ProductDaoMemory from "./daos/product/ProductDaoMem.js";
import CartDaoMemory from "./daos/cart/CartDaoMem.js";

// Mongo DAO
import ProductDaoMongo from "./daos/product/ProductDaoMongo.js";
import CartDaoMongo from "./daos/cart/CartDaoMongo.js";

let ProductDAO = null;
let CartDAO = null;

const PERS = process.env.PERS || "mongo";

switch (PERS) {
  case "memory":
    ProductDAO = ProductDaoMemory.getInstance();
    CartDAO = CartDaoMemory.getInstance();
    console.log('using memory as a db')
    break;

  case "mongo":
    ProductDAO = ProductDaoMongo.getInstance();
    CartDAO = CartDaoMongo.getInstance();
    console.log('using mongodb as a db')
    break;
}

export { ProductDAO, CartDAO };
