const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const BadPlayers = db.define('BadPlayers', {
    badplayer1:{
        type: DataTypes.STRING,
        required: true
    },
    badplayer2:{
        type: DataTypes.STRING,
        required: true
    },
    badplayer3:{
        type: DataTypes.STRING,
        required: true
    },
    badplayer4:{
        type: DataTypes.STRING,
        required: true
    },
    badplayer5:{
        type: DataTypes.STRING,
        required: true
    },
    badplayer6:{
        type: DataTypes.STRING,
        required: true
    },
    badplayer7:{
        type: DataTypes.STRING,
        required: true
    },
    badplayer8:{
        type: DataTypes.STRING,
        required: true
    },
})

module.exports = BadPlayers