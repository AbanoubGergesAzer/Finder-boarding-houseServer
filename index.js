
// modules & Configuration
const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const path = require('path');
const jwt = require('jsonwebtoken')
// Controllers
const Controllers = require('./controllers/index')

//middleware authentication
const Authentication = require('./middleware.js').authentication


app.use(bodyParser.json())

app.use('/static',express.static('static/images'));

//controllers
const port = process.env.PORT || 8080;



// router group


app.group("/api/v1", (router) => {
    
    // register router
    router.post('/regis',Controllers.register)

    // login router 
    router.post('/login', Controllers.login)

    router.post('/',Authentication,Controllers.update)

    // show all kokst
    router.get('/listkost',Controllers.showkost)

    // // // add a booking kost
    router.post('/booking',Authentication,Controllers.booking)

    // wanna see my booking list
    router.get('/mybooking',Authentication,Controllers.mybookinglist)

    // upload gambar
    router.post('/uploadimg',Authentication,Controllers.add_kost)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))