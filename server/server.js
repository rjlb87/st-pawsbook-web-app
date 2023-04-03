require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

// Import Controllers
// const ownersController = require('./controller/owners')

// Initialize Express App
const app = express()

// Setup Port
const port = process.env.DB_PORT || 3000

// Express Setup
app.use(express.static(path.join(__dirname, './frontend/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// API Endpoints
app.get('/', (req, res) => {
    // http://localhost:3080/
    res.send('Welcome to Awesome Application')
})

// Add application endpoints (owners, pet, appointment)
app.get('/api/v1/owners', (req, res) => {
    // http://localhost:3080/api/v1/owners
    res.send('Owners Endpoint')
})

app.get('/api/v1/pets', (req, res) => {
    res.send('Pet Endpoint')
})

app.get('/api/v1/appointments', (req, res) => {
    res.send('Appointment Endpoint')
})

// Express Listening Port
app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})