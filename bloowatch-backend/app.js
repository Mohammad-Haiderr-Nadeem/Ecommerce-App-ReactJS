const {sequelize} = require('./models');
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));
app.use(cookieParser());

const productRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const userRoute = require('./routes/user');
const imageRoute = require('./routes/images');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/', authRoutes);
app.use('/', productRoute);
app.use('/', cartRoute);
app.use('/', userRoute);
app.use('/', imageRoute);

app.listen({port: 8000}, async () => {
    console.log('server running on port 8000');
    await sequelize.authenticate(); 
    console.log('Database connected!!');
});

