'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Images.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    img1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img4: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};