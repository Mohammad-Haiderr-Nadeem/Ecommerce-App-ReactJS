'use strict';
const {
  Model
} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Products extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Products.init({
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//     },
//     imgurl: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     productName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     category: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     }
//   }, {
//     sequelize,
//     modelName: 'Products',
//   });

//   return Products;
// };


module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    imgurl1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return Products;
};