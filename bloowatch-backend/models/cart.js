'use strict';
const {
  Model
} = require('sequelize');
const { Users } = require('./users');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.Users, {
        foreignKey: 'email',
      });
    }
  }
  Cart.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    imgurl: {
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
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },email: {
      type: DataTypes.STRING,
      references: {
        model: Users,
        key: 'email'
      }
  },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};

