'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookinglists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      create_by: {
        type: Sequelize.INTEGER,
        
      },
      kost_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model : 'users',
          key : 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      datebook: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bookinglists');
  }
};