const Sequelize = require('sequelize');
const sequelize = require('../database/database.js');

const Crianca = sequelize.define("crianca", {
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
    dataNasc: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    sexo: {
        allowNull: false,
        type: Sequelize.STRING(10),
        validate:{
            len:[1, 10]
        }
    },
    grauParentesco: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate:{
            len:[3, 20]
        }
    },
    corOlho: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
            len: [5, 20]
        }
    },
    corCabelo: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
            len: [5, 20]
        }
    },
    tipoCabelo: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
            len: [10, 20]
        }
    },
    tomPele: {
        allowNull: false,
        type: Sequelize.STRING(20),
        validate: {
            len: [10, 20]
        }
    },
    observacao: {
        allowNull: true,
        type: Sequelize.STRING(300),
        validate: {
            len: [0, 200]
        }
    },
    qrcodeId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'qrcodes',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
});

module.exports = Crianca;