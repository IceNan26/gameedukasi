const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('gameedukasi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database: ' + error);
  });

module.exports = sequelize;
