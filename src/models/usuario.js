const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');

const Usuario = sequelize.define("usuario", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(15),
        validate:{
            len:[1, 15]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [10, 100]
        }
    },
    cidade: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate:{
            len:[3, 100]
        }
    },
    estado: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
            len: [2, 20]
        }
    },
    rua: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    bairro: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    numero: {
        allowNull: false,
        type: Sequelize.STRING(10),
        validate: {
            len: [1, 10]
        }
    },
    senha: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [6, 100]
        }
    }
});

module.exports = Usuario;