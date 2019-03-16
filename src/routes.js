const express = require('express')

const routes = express.Router()

const authMiddlewarre = require('./app/middlewares/auth')

const {
  UserController,
  SessionController,
  AdController,
  PurchaseController
} = require('./app/controllers')

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddlewarre)

// Ads
routes.get('/ads', AdController.index)
routes.get('/ads/:id', AdController.show)
routes.post('/ads', AdController.store)
routes.put('/ads/:id', AdController.update)
routes.delete('/ads/:id', AdController.destroy)

// Purchase
routes.post('/purchases', PurchaseController.store)

module.exports = routes
