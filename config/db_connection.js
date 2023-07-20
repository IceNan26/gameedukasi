const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('railway', 'root', 'mEnOxBpXX1KRj1I9cU35', {
  host: 'containers-us-west-39.railway.app',
  port: 6161,
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
