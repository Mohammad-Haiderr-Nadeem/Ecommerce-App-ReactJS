'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'imgurl1', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    await queryInterface.addColumn('Products', 'img2', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    await queryInterface.addColumn('Products', 'img3', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    await queryInterface.addColumn('Products', 'img4', {
      type: Sequelize.STRING,
      allowNull: false,
    }),
    await queryInterface.removeColumn('Products', 'imgurl',{
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'imgurl1', {
      type: Sequelize.STRING,
    }),
    await queryInterface.removeColumn('Products', 'img2', {
      type: Sequelize.STRING,
    }),
    await queryInterface.removeColumn('Products', 'img3', {
      type: Sequelize.STRING,
    }),
    await queryInterface.removeColumn('Products', 'img4', {
      type: Sequelize.STRING,
    }),
    await queryInterface.addColumn('Products', 'imgurl',{
      type: Sequelize.STRING,
      allowNull: false,
    })
  }
};
