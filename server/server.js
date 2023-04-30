require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

// Import Controllers
const ownersController = require('./controller/owners')
const dogProfilesController = require('./controller/dogprofiles')
const appointmentsController = require('./controller/appointments')

// Initialize Express App
const app = express()

// Setup Port
const port = process.env.DB_PORT || 8080

// Express Setup
app.use(express.static(path.join(__dirname, './ui/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/api/v1/owners', (req, res) => {
    ownersController.getOwners().then((data) => res.json(data))
})

//create owners request
app.post('/api/v1/owners', (req, res) => {
    ownersController
        .createOwners(req.body.owners)
        .then((data) => res.json(data))
})

app.put('/api/v1/owners', (req, res) => {
    ownersController
        .updateOwners(req.body.owners)
        .then((data) => res.json(data))
})

app.delete('/api/v1/owners/:id', (req, res) => {
    ownersController.deleteOwners(req.params.id).then((data) => res.json(data))
})

// API Login
app.post('/api/v1/Signin', (req, res) => {
    ownersController.loginOwners(req.body).then((data) => res.json(data))
})

//Dog profiles request
app.get('/api/v1/dogprofiles', (req, res) => {
    dogProfilesController.getDogProfiles().then((data) => res.json(data))
})

app.post('/api/v1/dogprofiles', (req, res) => {
    // console.log('ano ang request', req.body)
    dogProfilesController
        .createDogProfiles(req.body.dog_profiles)
        .then((data) => res.json(data))
})

app.put('/api/v1/dogprofiles', (req, res) => {
    dogProfilesController
        .updateDogProfiles(req.body.owners)
        .then((data) => res.json(data))
})

app.delete('/api/v1/dogprofiles/:id', (req, res) => {
    dogProfilesController
        .deleteDogProfiles(req.params.id)
        .then((data) => res.json(data))
})

//appointments request
app.get('/api/v1/appointments', (req, res) => {
    appointmentsController.getAppointments().then((data) => res.json(data))
})

app.post('/api/v1/appointments', (req, res) => {
    // console.log('ano ang request', req.body)
    appointmentsController
        .createAppointments(req.body.appointments)
        .then((data) => res.json(data))
})

app.put('/api/v1/appointments', (req, res) => {
    appointmentsController
        .updateAppointments(req.body.appointments)
        .then((data) => res.json(data))
})

app.delete('/api/v1/appointments/:id', (req, res) => {
    appointmentsController
        .deleteAppointments(req.params.id)
        .then((data) => res.json(data))
})
app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
