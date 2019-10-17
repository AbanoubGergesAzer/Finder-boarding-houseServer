'use strict';
module.exports = (sequelize, DataTypes) => {
  const kost = sequelize.define('kost', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    city : DataTypes.STRING,
    photos: DataTypes.STRING,
    seller: DataTypes.STRING,
    contact: DataTypes.STRING,
    availablerooms: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    large: DataTypes.STRING,
    facility: DataTypes.STRING,
    create_by: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  kost.associate = function(models) {
    kost.belongsTo(models.users,{
      as : 'createBy',
      foreignKey : 'create_by'
    })
  };
  return kost;
};