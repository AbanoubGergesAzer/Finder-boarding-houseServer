'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('kosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      city : {
        type: Sequelize.STRING
      },
      photos: {
        type: Sequelize.STRING
      },
      seller: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      availablerooms: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      large: {
        type: Sequelize.STRING
      },
      facility: {
        type: Sequelize.STRING
      },
      create_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('kosts');
  }
};