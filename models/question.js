const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');

const Question = sequelize.define('questions', {
  // Column definitions
  idSoal: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  questions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  a1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  a2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  a3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  a4: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correct: {
    type: DataTypes.STRING,
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
  tableName: 'questions'
});

module.exports = Question;
