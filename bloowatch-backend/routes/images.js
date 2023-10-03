const {
    getImages,
    getSpecificImage,
    deleteImage,
    updateImage,
    addImage,
} = require('../controllers/images');

const express = require('express');

const router = express.Router();

//adds an image
router.post('/addImage', addImage);

//get the list of all the images
router.get('/getImages', getImages);

//get a particular image
router.get('/getImages/:id', getSpecificImage);

//delete a particular image
router.delete('/removeImage/:id', deleteImage);

//update a particular image
router.put('/updateImage/:id', updateImage);

module.exports = router;