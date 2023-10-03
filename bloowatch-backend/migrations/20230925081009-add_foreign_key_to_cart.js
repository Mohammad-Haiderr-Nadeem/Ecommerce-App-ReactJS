'use strict';
const {Users} = require('../models/users')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn(
        'Carts',
          'email',
          {
            type: Sequelize.STRING,
            references: Users,
            referenceKey: 'email'
            // references: {
            //   model: Users,
            //   key: "userEmail"
            // }
          },
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn(
        'Carts',
        'email'
      )
    ])
  }
};
