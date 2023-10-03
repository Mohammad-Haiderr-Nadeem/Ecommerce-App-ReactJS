const modal = require('../models');
const bcrypt = require('bcrypt');

// adds a User
const addUser = async (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10).then(async (hash) => {
        const existingUser = await modal.Users.findOne({
            where: { email },
        });
        if (!existingUser) {
            if (name && email && password) {
                try {
                    const user = await modal.Users.create({ name, email, password: hash });
                    return res.json({ user});
                } catch (err) {
                    console.log('err adding user: ', err);
                    return res.status(400).json(err);
                }
            } else {
                return res.status(400).json({
                    msg: 'name, email or password is empty',
                });
            }
        } else {
            return res.status(400).json({
                msg: 'User already exists',
            });
        }
    });
};

//checks a User
const checkUser = async (req, res) => {
    const { body: { email, password }, accessToken } = req;
    const user = await modal.Users.findOne({
        where: { email },
    });
    if (user) {
        try {
            bcrypt.compare(password, user.password, (error, response) => {
                if (response) {
                    res.cookie('accessToken', accessToken);
                    res.json({ success: true, message: 'Login successful', user, accessToken});
                } else {
                    console.log('error in getting response', error);
                    return res.status(400).json({ error: 'Invalid credentials' });
                }
            });
        } catch (err) {
            console.log('err checking user: ', err);
            return res.status(400).json({ error: 'An error occurred' });
        }
    } else {
        return res.status(400).json({
            msg: 'User cannot log in',
        });
    }
};


//get all the users
const getUsers = async (req, res) => {
    try {
        const response = await modal.Users.findAll();
        if(!!response){
            return res.status(200).json(response);
        } else {
            return res.status(200).json({
                msg: 'could not find any user'
            });
        }
    } catch(err) {
        console.error("Error getting users", err);
        return res.status(400).json({
            msg: 'Error in getting the response'
        });
    }
}

//get a particular user
const getSpecificUser = async (req, res) => {
    const { email } = req.params.email;
    try{
        const user = await modal.Users.findOne({
            where: { email },
        })
        if(user) {
            return res.json(user);
        } else {
            return res.status(400).json({
                msg: 'no such user exists'
            });
        }
    } catch(err){
        console.error(`Error finding user with ID ${email}`, err);
        return res.status(400).json(err);
    }
}

//delete a user
const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        if(!id) {
            throw new Error('Product Id not found')
        }
        const user = await modal.Users.findOne({
            where: {id},
        })
        if(user){
            await user.destroy();
            return res.json({
                msg: `User with id:${id} has been deleted`
            }); 
        } else {
            return res.json({
                msg: `User with id:${id} not found`
            });
        }
    } catch(err){
        console.error(`Error finding user with ID ${id}`, err);
        return res.status(400).json('Failed');
    }
}

module.exports = {
    getUsers,
    getSpecificUser,
    deleteUser,
    addUser,
    checkUser,
};
