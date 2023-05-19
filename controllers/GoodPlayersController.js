const BadPlayers = require('../models/BadPlayers')
const GoodPlayers = require('../models/GoodPlayers')
const MediumPlayers = require('../models/MediumPlayers')

module.exports = class GoodPlayersController {

    static createGoodPlayer(req ,res){
        res.render('players/creategoodplayers')
    }

    static async createGoodPlayerSave(req, res){

        const goodplayers = {
            goodplayer1: req.body.goodplayer1,
            goodplayer2: req.body.goodplayer2,
            goodplayer3: req.body.goodplayer3,
            goodplayer4: req.body.goodplayer4,
            goodplayer5: req.body.goodplayer5,
            goodplayer6: req.body.goodplayer6,
            goodplayer7: req.body.goodplayer7,
            goodplayer8: req.body.goodplayer8,

        }

        await GoodPlayers.create(goodplayers)

        res.redirect('/players')
    }

    static async showGoodPlayers(req, res){

        const good = await GoodPlayers.findAll({raw: true})
        const medium = await MediumPlayers.findAll({ raw: true });
        const bad = await BadPlayers.findAll({raw: true})

        
        const tableGood = []
        for (let i = 0; i < good.length; i++) {
            const linha = good[i];
            tableGood.push(linha);
          }
        console.log(tableGood)
          
        const tableMedium = []
        for(let i = 0; i < medium.length; i++){
            const linha = medium[i];
            tableMedium.push(linha)
        }
        console.log(tableMedium)

        const tableBad = []
        for(let i = 0; i < bad.length; i++){
            const linha = bad[i];
            tableBad.push(linha)
        }
        console.log(tableBad)

        let count = 0;
        const setTeams = []
        let timesA = []
        let timesB = []
        

        const randomizeTeams = () => {
            count = count + 1;
            const newTeams = [];

            for(let i = 0; i < 8; i++){
                const gpIndex = Math.floor(Math.random() * tableGood.length)
                const mpIndex = Math.floor(Math.random() * tableMedium.length)
                const bpIndex = Math.floor(Math.random() * tableBad.length)

                const newTeam = {
                    gp: tableGood[gpIndex],
                    mp: tableMedium[mpIndex],
                    bp: tableBad[bpIndex]
                }

                newTeams.push(newTeam);

                tableGood.splice(gpIndex, 1);
                tableMedium.splice(mpIndex, 1);
                tableBad.splice(bpIndex, 1);
            }
            

            var ga = newTeams.splice(4);
            const timesA = ga;

            var gb = newTeams.splice(4);
            const timesB = gb;

        }
        console.log([...timesA])
        var A = timesA.slice(3)
        var B = timesB.slice(-1)

        randomizeTeams()  

        res.render('players/all', {good, medium, bad})

    }

    static async removeGoodPlayers(req, res){

        const id = req.body.id;

        await GoodPlayers.destroy({where: {id : id}})

        res.redirect('/players')

    }

    static async updateGoodPlayers(req, res){
        const id = req.params.id;

        const goodplayers = await GoodPlayers.findOne({raw: true, where: {id:id}})

        res.render('players/updategoodplayers', {goodplayers})
    }

    static async updateGoodPlayersPost(req, res){

        const id = req.body.id;

        const goodplayers = {
            goodplayer1: req.body.goodplayer1,
            goodplayer2: req.body.goodplayer2,
            goodplayer3: req.body.goodplayer3,
            goodplayer4: req.body.goodplayer4,
            goodplayer5: req.body.goodplayer5,
            goodplayer6: req.body.goodplayer6,
            goodplayer7: req.body.goodplayer7,
            goodplayer8: req.body.goodplayer8,

        }

        await GoodPlayers.update(goodplayers, {where: {id:id}})

        res.redirect('/players')
    }

}