const userRouter = require('express').Router()

const {
	createOneUser,
	getOneUser,
	getAllUsers,
	getOneUserPlusInfo,
} = require('./controller')
const { createOneApartment } = require('../apartment/controller')

userRouter.get('/:id', getOneUser)
userRouter.get('/:id/info', getOneUserPlusInfo)

userRouter.get('/', getAllUsers)

userRouter.post('/', createOneUser)
userRouter.post('/:id/apartments', createOneApartment)

module.exports = userRouter
