'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookinglist = sequelize.define('bookinglist', {
    create_by: DataTypes.INTEGER,
    kost_id: DataTypes.INTEGER,
    datebook: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    timestamps : false
  });
  bookinglist.associate = function(models) {
    bookinglist.belongsTo(models.kost,{
      as : "kostID",
      foreignKey: "kost_id"
    });
  };
  return bookinglist;
};