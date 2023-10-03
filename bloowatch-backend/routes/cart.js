const express = require('express');

const  {
    getProductsFromCart,
    deleteProductFromCart,
    addProductToCart,
} = require('../controllers/cart');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

//add a product to the cart
router.post('/addProductToCart', verifyToken, addProductToCart);

//get the list of all the products from the cart
router.get('/getProductFromCart', verifyToken, getProductsFromCart);

//delete a particular product from the cart
router.delete('/removeProductFromCart/:id', verifyToken, deleteProductFromCart);

module.exports = router;