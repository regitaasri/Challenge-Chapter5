'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
    }
  }
  Car.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    rent_per_day: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
    createdByUser: DataTypes.INTEGER,
    lastUpdatedByUser: DataTypes.INTEGER,
    deletedByUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
    paranoid: true
  });
  return Car;
};