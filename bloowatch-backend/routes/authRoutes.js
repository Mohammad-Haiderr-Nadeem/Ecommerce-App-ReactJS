const express = require('express');

const { verifyToken } = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', verifyToken);

router.get('/', verifyToken);

module.exports = router;