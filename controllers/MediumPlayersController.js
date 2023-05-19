const MediumPlayers = require('../models/MediumPlayers')

module.exports = class MediumPlayersController{
    
    static createMediumPlayer(req, res){
        res.render('players/createmediumplayers')
    }

    static async createMediumPlayerSave(req ,res){

        const mediumplayers = {
            mediumplayer1: req.body.mediumplayer1,
            mediumplayer2: req.body.mediumplayer2,
            mediumplayer3: req.body.mediumplayer3,
            mediumplayer4: req.body.mediumplayer4,
            mediumplayer5: req.body.mediumplayer5,
            mediumplayer6: req.body.mediumplayer6,
            mediumplayer7: req.body.mediumplayer7,
            mediumplayer8: req.body.mediumplayer8,
        }

        await MediumPlayers.create(mediumplayers)

        res.redirect('/players')

    }

    static async showMediumPlayers(req, res){

            try {
              const medium = await MediumPlayers.findAll({ raw: true });
        
              res.render('players/all', { medium });
            } catch (error) {
              // Lidar com erros, se necessário
              console.error(error);
              res.status(500).send('Erro ao buscar jogadores médios.');
            }
          }
        
          // Restante do código do controller
          // ...
        

    static async removeMediumPlayers(req, res){

        const id = req.body.id

        await MediumPlayers.destroy({where: {id : id}})

        res.redirect('/players')

    }

    static async updateMediumPlayers(req ,res){
        const id = req.params.id

        const mediumplayers = await  MediumPlayers.findOne({raw: true, where: {id : id}})

        res.render('players/updatemediumplayers', {mediumplayers})
    }

    static async updateMediumPlayersPost(req ,res){

        const id = req.body.id

        const mediumplayers = {
            mediumplayer1: req.body.mediumplayer1,
            mediumplayer2: req.body.mediumplayer2,
            mediumplayer3: req.body.mediumplayer3,
            mediumplayer4: req.body.mediumplayer4,
            mediumplayer5: req.body.mediumplayer5,
            mediumplayer6: req.body.mediumplayer6,
            mediumplayer7: req.body.mediumplayer7,
            mediumplayer8: req.body.mediumplayer8,

        }

        await MediumPlayers.update(mediumplayers, {where: { id : id}})

        res.redirect('/players')
    }



}