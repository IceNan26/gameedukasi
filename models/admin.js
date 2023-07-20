const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');


const Admin = sequelize.define('users', {
    idAdmin: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at', // Specify the column name if it differs from the attribute name
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at', // Specify the column name if it differs from the attribute name
    },
  }, {
    // Specify the table name if it differs from the model name
    tableName: 'admin'
})

module.exports = Admin