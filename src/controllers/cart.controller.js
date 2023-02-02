import { CartService } from "../services/cart.service.js";
import { ProductService } from "../services/product.service.js";

const cartService = new CartService();

export async function create(req, res) {
    const newCart = await cartService.createCart();

    newCart
        ? res.status(200).json({"success": "Cart added with ID " + newCart._id})
        : res.status(500).json({"error": "there was an error"})
}

export async function remove(req, res) {
    const {id} = req.params;
    const wasDeleted = await cartService.deleteCartById(id);

    wasDeleted
        ? res.status(200).json({"success": "cart successfully removed"})
        : res.status(404).json({"error": "cart not found"})
}

export async function addProduct(req, res) {
    const {id} = req.params;
    const {body} = req;

    const productExists = await ProductService.exists(body.productId);

    if (productExists) {
        await cartService.saveProductToCart(id, body)
        res.status(200).json({"success": "product added to cart successfully"})
    } else {
        res.status(404).json({"error": "product not found"});
    }
}

export async function getProducts(req, res) {
    const {id} = req.params;
    const cartProducts = await cartService.getAllProductsFromCart(id);

    cartProducts
        ? res.status(200).json(cartProducts)
        : res.status(404).json({"error": "cart not found"})
}

export async function removeProduct(req, res) {
    const {id, id_prod} = req.params;

    const wasDeleted = await cartService.deleteProductFromCart(id, id_prod);

    wasDeleted
        ? res.status(200).json({"success": "that product is no longer in the cart"})
        : res.status(400).json({"error": "there was some problem"})
}