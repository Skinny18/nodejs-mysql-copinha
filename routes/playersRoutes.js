const express = require('express');
const BadPlayersController = require('../controllers/BadPlayersController');
const router = express.Router()

const GoodPlayersController = require('../controllers/GoodPlayersController')
const MediumPlayersController = require('../controllers/MediumPlayersController')

//Jogadores Bons
router.get('/addgoodplayer', GoodPlayersController.createGoodPlayer)
router.post('/addgoodplayer',GoodPlayersController.createGoodPlayerSave)
router.post('/removegoodplayer', GoodPlayersController.removeGoodPlayers)
router.get('/updategoodplayer/:id', GoodPlayersController.updateGoodPlayers)
router.post('/updategoodplayer', GoodPlayersController.updateGoodPlayersPost)
router.get('/', GoodPlayersController.showGoodPlayers)

//Jogadores Médios
router.get('/addmediumplayer', MediumPlayersController.createMediumPlayer)
router.post('/addmediumplayer', MediumPlayersController.createMediumPlayerSave)
router.post('/removemediumplayers', MediumPlayersController.removeMediumPlayers)
router.get('/medium', MediumPlayersController.showMediumPlayers)
router.get('/updatemediumplayer/:id', MediumPlayersController.updateMediumPlayers)
router.post('/updatemediumplayer', MediumPlayersController.updateMediumPlayersPost)


//Jogadores Ruins
router.get('/addbadplayer', BadPlayersController.createBadPlayer)
router.post('/addbadplayer', BadPlayersController.createBadPlayerSave)
router.get('/bad', BadPlayersController.showBadPlayers)
router.post('/removebadplayers', BadPlayersController.removeBadPlayers)
router.get('/updatebadplayers/:id', BadPlayersController.updateBadPlayers)
router.post('/updatebadplayers', BadPlayersController.updateBadPlayersPost)



module.exports = router