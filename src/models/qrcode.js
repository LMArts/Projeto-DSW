const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');

const Qrcode = sequelize.define("qrcode", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    codigo: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    },
    localizacao: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate:{
            len:[10, 100]
        }
    },
    usuarioId: {
        allowNull: false,
        type: Sequelize.INTEGER
    },

});

module.exports = Qrcode;