const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root','Leo2204@', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection