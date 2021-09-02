const userRouter = require('express').Router()

const { createOneUser, getOneUser, getAllUsers } = require('./controller')
const { createOneApartment } = require('../apartment/controller')

userRouter.get('/:id', getOneUser)
userRouter.get('/', getAllUsers)

userRouter.post('/', createOneUser)
userRouter.post('/:id/apartments', createOneApartment)

module.exports = userRouter
