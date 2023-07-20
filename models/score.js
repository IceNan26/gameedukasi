const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');

const Siswa = sequelize.define('questions', {
  // Column definitions
  idSiswa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  namaSiswa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  tableName: 'siswa'
});

module.exports = Siswa;
