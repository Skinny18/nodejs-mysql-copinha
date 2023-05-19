const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const GoodPlayers = db.define('GoodPlayers', {
    goodplayer1:{
        type: DataTypes.STRING,
        required: true
    },
    goodplayer2:{
        type: DataTypes.STRING,
        required: true
    },
    goodplayer3:{
        type: DataTypes.STRING,
        required: true
    },
    goodplayer4:{
        type: DataTypes.STRING,
        required: true
    },
    goodplayer5:{
        type: DataTypes.STRING,
        required: true
    },
    goodplayer6:{
        type: DataTypes.STRING,
        required: true
    },
    goodplayer7:{
        type: DataTypes.STRING,
        required: true
    },
    goodplayer8:{
        type: DataTypes.STRING,
        required: true
    },
})

module.exports = GoodPlayers;