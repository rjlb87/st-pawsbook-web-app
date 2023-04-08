require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

// Import Controllers
const ownersController = require('./controller/owners')

// Initialize Express App
const app = express()

// Setup Port
const port = process.env.DB_PORT || 3000

// Express Setup
app.use(express.static(path.join(__dirname, './frontend/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// Add application endpoints (owners, pet, appointment)
app.get('/api/v1/owners', (req, res) => {
    // http://localhost:3080/api/v1/owners
    // do something here to get your data from the database
    ownersController.getOwners().then((data) => res.json(data))
})


//create owners request
app.post('/api/v1/owners', (req, res) => {
    ownersController.createOwners(req.body.owners).then((data) => res.json(data))
})

app.put('/api/v1/owners', (req, res) => {
    ownersController.updateOwners().then((data) => res.json(data))
})
app.delete('/api/v1/owners', (req, res) => {
    ownersController.deleteOwners().then((data) => res.json(data))
})
app.delete('/api/v1/owners', (req, res) => {
    ownersController.deleteOwners().then((data) => res.json(data))
})
// Express Listening Port
app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})

//create pet request