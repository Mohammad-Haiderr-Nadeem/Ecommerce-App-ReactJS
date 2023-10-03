const express = require('express');

const {
    getProducts,
    getSpecificProduct,
    deleteProduct,
    updateProduct,
    addProduct,
} = require ('../controllers/product');
const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

//add a product
router.post('/addProduct', verifyToken, addProduct);

//get the list of all the products
router.get('/getProduct', verifyToken, getProducts);

//get a particular product
router.get('/getProduct/:id', verifyToken, getSpecificProduct);

//delete a particular product
router.delete('/removeProduct/:id', verifyToken, deleteProduct);

//update a particular product
router.put('/updateProduct/:id', verifyToken, updateProduct);

module.exports = router;