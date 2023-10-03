const express = require('express');

const {
    getUsers,
    getSpecificUser,
    deleteUser,
    addUser,
    checkUser,
} = require ('../controllers/users');
const { loginUser }  = require('../middlewares/loginUser');
const { verifyUser } = require("../middlewares/verifyUser");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

//add a product
router.post('/signUp', verifyUser, addUser);

//checks a user
router.post('/login', loginUser, verifyUser, checkUser); // login 

//get the list of all the products
router.get('/getUsers', verifyToken, getUsers);

//get a particular product
router.get('/getUsers/:id', verifyToken, getSpecificUser); // email

//delete a particular product
router.delete('/removeUser/:id', verifyToken, deleteUser); // email

module.exports = router;