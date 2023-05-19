const BadPlayers = require('../models/BadPlayers')

module.exports = class BadPlayersController{

    static async createBadPlayer(req, res){
        res.render('players/createbadplayers')
    }

    static async createBadPlayerSave(req, res){

        const badplayers = {
            badplayer1: req.body.badplayer1,
            badplayer2: req.body.badplayer2,
            badplayer3: req.body.badplayer3,
            badplayer4: req.body.badplayer4,
            badplayer5: req.body.badplayer5,
            badplayer6: req.body.badplayer6,
            badplayer7: req.body.badplayer7,
            badplayer8: req.body.badplayer8,

        }

        await BadPlayers.create(badplayers)

        res.redirect('/players')

    }

    static async showBadPlayers(req ,res){
        try {
            const bad = await BadPlayers.findAll({ raw: true });
      
            res.render('players/all', { medium });
          } catch (error) {
            // Lidar com erros, se necessário
            console.error(error);
            res.status(500).send('Erro ao buscar jogadores médios.');
          }
    }

    static async removeBadPlayers(req, res){
        const id = req.body.id

        await BadPlayers.destroy({where: { id : id}})

        res.redirect('/players')
    }

    static async updateBadPlayers(req, res){
        const id = req.params.id

        const badplayers = await BadPlayers.findOne({raw: true, where: {id:id}})

        res.render('players/updatebadplayers', {badplayers})
    }

    static async updateBadPlayersPost(req, res){
        const id = req.body.id

        const badplayers = {
            badplayer1: req.body.badplayer1,
            badplayer2: req.body.badplayer2,
            badplayer3: req.body.badplayer3,
            badplayer4: req.body.badplayer4,
            badplayer5: req.body.badplayer5,
            badplayer6: req.body.badplayer6,
            badplayer7: req.body.badplayer7,
            badplayer8: req.body.badplayer8,
        }

        await BadPlayers.update(badplayers, {where: {id:id}})

        res.redirect('/players')
    }

    

}