const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('copinha', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
})

try{

    sequelize.authenticate()
    console.log('Conectou ao MySQL!')

}catch(error){
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize;