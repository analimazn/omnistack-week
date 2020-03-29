const express = require('express')
const ongController = require('./controller/ong')
const incidentController = require('./controller/incident')
const profileController = require('./controller/profile')
const sessionController = require('./controller/session')

const routes = express.Router()

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes