const userRouter = require('express').Router()

const {
	createOneUser,
	getOneUser,
	getAllUsers,
	getOneUserPlusInfo,
	getAllApartments,
	// updateOneUser,
} = require('./controller')

const {
	createOneApartment,
	getApartmentsByCity,
	deleteOneApartment,
	// updateOneApartment
} = require('../apartment/controller')

//GENERAL USER FUNCTIONS
userRouter.post('/', createOneUser)
userRouter.get('/:id', getOneUser)
userRouter.get('/:id/info', getOneUserPlusInfo)
userRouter.get('/', getAllUsers)
// userRouter.patch('/:id', updateOneUser)

//FROM A HOST POINT OF VIEW
//CREATE ONE APARTMENT
userRouter.post('/:id/apartments', createOneApartment)
//GET ALL YOUR APARTMENTS
userRouter.get('/:id/apartments', getAllApartments)
//DELETE ONE OF YOUR APARTMENTS
userRouter.delete('/:id/apartments/:apartId', deleteOneApartment)

//UPDATE ONE OF YOUR APARTMENTS
// userRouter.patch('/:id/apartments/:id', updateOneApartment)
//GET ONE OF YOUR APARTMENTS
// userRouter.get('/:id/apartments/:id', getOneApartment)

//GENERAL
//GET ALL APARTMENTS BY CITY
userRouter.get('/apartments/:city', getApartmentsByCity)

module.exports = userRouter
