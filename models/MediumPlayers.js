const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const MediumPlayers = db.define('MediumPlayers', {
    mediumplayer1:{
        type: DataTypes.STRING,
        required: true
    },
    mediumplayer2:{
        type: DataTypes.STRING,
        required: true
    },
    mediumplayer3:{
        type: DataTypes.STRING,
        required: true
    },
    mediumplayer4:{
        type: DataTypes.STRING,
        required: true
    },
    mediumplayer5:{
        type: DataTypes.STRING,
        required: true
    },
    mediumplayer6:{
        type: DataTypes.STRING,
        required: true
    },
    mediumplayer7:{
        type: DataTypes.STRING,
        required: true
    },
    mediumplayer8:{
        type: DataTypes.STRING,
        required: true
    },
})

module.exports = MediumPlayers;