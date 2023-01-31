import CarritoService  from "../services/carrito.service.js";
import ProductoService from "../services/producto.service.js";

// const carritoService = new CarritoService();

export async function create(req, res) {
    const newCart = await CarritoService.createCart();

    newCart
        ? res.status(200).json({"success": "Cart added with ID " + newCart._id})
        : res.status(500).json({"error": "there was an error"})
}

export async function remove(req, res) {
    const {id} = req.params;
    const wasDeleted = await CarritoService.deleteCartById(id);

    wasDeleted
        ? res.status(200).json({"success": "cart successfully removed"})
        : res.status(404).json({"error": "cart not found"})
}

export async function addProduct(req, res) {
    const {id} = req.params;
    const {body} = req;

    const productExists = await ProductoService.exists(body.productId);

    if (productExists) {
        await CarritoService.saveProductToCart(id, body)
        res.status(200).json({"success": "product added to cart successfully"})
    } else {
        res.status(404).json({"error": "product not found"});
    }
}

export async function getProducts(req, res) {
    const {id} = req.params;
    const cartProducts = await CarritoService.getAllProductsFromCart(id);

    cartProducts
        ? res.status(200).json(cartProducts)
        : res.status(404).json({"error": "cart not found"})
}

export async function removeProduct(req, res) {
    const {id, id_prod} = req.params;

    const wasDeleted = await CarritoService.deleteProductFromCart(id, id_prod);

    wasDeleted
        ? res.status(200).json({"success": "that product is no longer in the cart"})
        : res.status(400).json({"error": "there was some problem"})
}