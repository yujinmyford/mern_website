require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// middleware
app.use((req, res, next) =>  {
    console.log(req.path, req.method)
    next()
})

// route handler
//routes   
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
