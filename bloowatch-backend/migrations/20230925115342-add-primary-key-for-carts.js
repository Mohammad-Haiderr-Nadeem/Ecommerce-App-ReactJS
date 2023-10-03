'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // return Promise.all[(
    // )]
    await queryInterface.addColumn('Carts', 'newId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      })
  },

  async down (queryInterface, Sequelize) {
    return Promise.all[(
      queryInterface.removeColumn('Carts',
      'newId', {
        type: Sequelize.INTEGER,
      })
    )]
  }
};
