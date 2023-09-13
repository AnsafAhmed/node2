const Sequelize = require('sequelize');

const sequelize = new Sequelize('test3', 'ansaf', 'ansaf', {
    host: '34.69.20.200',
    dialect: 'mariadb'
});

module.exports = sequelize;