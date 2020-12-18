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
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },

});

module.exports = Qrcode;