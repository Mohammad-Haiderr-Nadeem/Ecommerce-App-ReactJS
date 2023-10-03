const modal = require('../models');

//adds a product to the cart
const addProductToCart = async (req, res) => {
    const {imgurl, productName, category, price, quantity, email} = req.body;
    if(imgurl && productName && category && price && quantity && email){
        try {
            const product = await modal.Cart.create({imgurl, productName, category, price, quantity, email});
            return res.json(product);
        } catch(err) {
            console.log('err adding product to the cart: ',err);
            return res.status(400).json(err);
        }
    } else {
        return res.status(400).json({
            msg: 'id or imgurl or productName, category, price, email is empty'
        });
    }
}

//gets all the products from the cart
const getProductsFromCart = async (req, res) => {
    const { email } = req.query;
    try {
        const response = await modal.Cart.findAll({
            where: { email },
        });
        if(!!response){
            return res.status(200).json(response);
        } else {
            return res.status(200).json({
                msg: 'could not find any product in the cart'
            });
        }
    } catch(err) {
        console.error("Error getting products", err);
        return res.status(400).json({
            msg: 'Error in getting the response'
        });
    }
}

//deletes a product from the cart
const deleteProductFromCart = async (req, res) => {
    const id = req.params.id;
    try {
        if(!id) {
            throw new Error('Product Id not found')
        }
        const product = await modal.Cart.findOne({
            where: {id},
        })
        if(product){
            await product.destroy();
            return res.json({
                msg: `Product with id:${id} has been deleted from the cart`
            }); 
        } else {
            return res.json({
                msg: `Product with id:${id} not found in the cart`
            });
        }
    } catch(err){
        console.error(`Error finding product with ID ${id} from the cart`, err);
        return res.status(400).json('Failed');
    }
}

module.exports = {
    getProductsFromCart,
    deleteProductFromCart,
    addProductToCart,
};