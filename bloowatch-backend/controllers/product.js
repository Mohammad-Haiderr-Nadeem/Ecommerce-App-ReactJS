const modal = require('../models');

//adds a product
const addProduct = async (req, res) => {
    const {id, imgurl1, img2, img3, img4, productName, category, price} = req.body;

    if(id && imgurl1 && img2 && img3 && img4 && productName && category && price){
        try {
            const product = await modal.Products.create({id, imgurl1, img2, img3, img4, productName, category, price});
            return res.json(product);
        } catch(err) {
            console.log('err adding product: ',err);
            return res.status(400).json(err);
        }
    } else {
        return res.status(400).json({
            msg: 'id or imgurl or productName, category, price is empty'
        });
    }
}

//gets all the products
const getProducts = async (req, res) => {
    try {
        const response = await modal.Products.findAll();
        if(!!response){
            return res.status(200).json(response);
        } else {
            return res.status(200).json({
                msg: 'could not find any product'
            });
        }
    } catch(err) {
        console.error("Error getting products", err);
        return res.status(400).json({
            msg: 'Error in getting the response'
        });
    }
}

//get a particular product
const getSpecificProduct = async (req, res) => {
    const id = req.params.id;
    try{
        const product = await modal.Products.findOne({
            where: {id},
        })
        if(product) {
            return res.json(product);
        } else {
            return res.status(400).json({
                msg: 'no such employee exists'
            });
        }
    } catch(err){
        console.error(`Error finding product with ID ${id}`, err);
        return res.status(400).json(err);
    }
}

//delete a product
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        if(!id) {
            throw new Error('Product Id not found')
        }
        const product = await modal.Products.findOne({
            where: {id},
        })
        if(product){
            await product.destroy();
            return res.json({
                msg: `Product with id:${id} has been deleted`
            }); 
        } else {
            return res.json({
                msg: `Product with id:${id} not found`
            });
        }
    } catch(err){
        console.error(`Error finding product with ID ${id}`, err);
        return res.status(400).json('Failed');
    }
}

//update a product
const updateProduct = async (req, res) => {
    const eid = req.params.id;
    const {id, imgurl, productName, category, price} = req.body;
    try{
        const product = await modal.Products.findOne({
            where: {id: eid},
        })
        if(product){
            product.id = id;
            product.imgurl = imgurl;
            product.productName = productName;
            product.category = category;
            product.price = price;
            product.save();
            return res.status(200).json(product);
        } else {
            return res.status(400).json({
                msg: 'no such product exists'
            });
        }
    } catch(err){
        console.error(`Error finding product with ID ${id}`, err);
        return res.status(400).json(err);
    }
}

module.exports = {
    getProducts,
    getSpecificProduct,
    deleteProduct,
    updateProduct,
    addProduct,
};