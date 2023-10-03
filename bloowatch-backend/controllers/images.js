const modal = require('../models');

//adds an image
const addImage = async (req, res) => {
    const {id, img1, img2, img3, img4} = req.body;

    if(id, img1, img2, img3, img4){
        try {
            const image = await modal.Images.create({id, img1, img2, img3, img4});
            return res.json(image);
        } catch(err) {
            console.log('err adding image: ',err);
            return res.status(400).json(err);
        }
    } else {
        return res.status(400).json({
            msg: 'id or img1 or img2 or img3 or img4 is missing'
        });
    }
}

//gets all the images
const getImages = async (req, res) => {
    try {
        const image = await modal.Images.findAll();
        if(!!image){
            return res.status(200).json(image);
        } else {
            return res.status(200).json({
                msg: 'could not find any image'
            });
        }
    } catch(err) {
        console.error("Error getting image", err);
        return res.status(400).json({
            msg: 'Error in getting the image'
        });
    }
}

//get a particular image
const getSpecificImage = async (req, res) => {
    const id = req.params.id;
    try{
        const image = await modal.Images.findOne({
            where: {id},
        })
        if(image) {
            return res.json(image);
        } else {
            return res.status(400).json({
                msg: 'no such image exists'
            });
        }
    } catch(err){
        console.error(`Error finding image with ID ${id}`, err);
        return res.status(400).json(err);
    }
}

//delete an image
const deleteImage = async (req, res) => {
    const id = req.params.id;
    try {
        if(!id) {
            throw new Error('Image Id not found')
        }
        const image = await modal.Images.findOne({
            where: {id},
        })
        if(image){
            await image.destroy();
            return res.json({
                msg: `Image with id:${id} has been deleted`
            }); 
        } else {
            return res.json({
                msg: `Image with id:${id} not found`
            });
        }
    } catch(err){
        console.error(`Error finding image with ID ${id}`, err);
        return res.status(400).json('Failed');
    }
}

//update am image
const updateImage = async (req, res) => {
    const eid = req.params.id;
    const {id, img1, img2, img3, img4} = req.body;
    try{
        const image = await modal.Images.findOne({
            where: {id: eid},
        })
        if(product){
            image.id = id;
            image.img1 = img1;
            image.img2 = img2;
            image.img3 = img3;
            image.img4 = img4;
            image.save();
            return res.status(200).json(image);
        } else {
            return res.status(400).json({
                msg: 'no such image exists'
            });
        }
    } catch(err){
        console.error(`Error finding image with ID ${id}`, err);
        return res.status(400).json(err);
    }
}

module.exports = {
    getImages,
    getSpecificImage,
    deleteImage,
    updateImage,
    addImage,
};