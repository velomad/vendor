'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorCake extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  VendorCake.init({
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        model: "Vendors",
        key: "id"
      }
    },
    cakeName: {
      type: DataTypes.STRING
    },
    cakeDescription: {
      type: DataTypes.STRING
    },
    cakeWeight: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'VendorCake',
  });
  return VendorCake;
};