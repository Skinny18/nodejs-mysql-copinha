const express = require('express')
const router = express()
const playersRoutes = require('./playersRoutes')


router.use("/players", playersRoutes)

//teste route
router.get("/", playersRoutes)

module.exports = router;