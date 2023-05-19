const express = require('express');
const exphbs = require('express-handlebars');
const app = express()

const conn = require('./db/conn')

const GoodPlayers = require('./models/GoodPlayers')


const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.static('public'))

const router = require('./routes/Routes')
app.use(router)

conn
.sync().then(() => {
    app.listen(port, () => {
        console.log("Servidor rodando na porta: ", port)
    })
}).catch((err) => console.log(err))