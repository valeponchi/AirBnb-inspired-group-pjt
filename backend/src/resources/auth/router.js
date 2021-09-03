const authRouter = require('express').Router()

const { loginUser, logOutUser, validateLoggedInToken } = require('./controller')

const { createOneUser } = require('../user/controller')

authRouter.route('/login').post(loginUser)

authRouter.route('/logout').get(logOutUser)

authRouter.route('/signup').post(createOneUser)

authRouter.route('/validate-token').get(validateLoggedInToken)

module.exports = authRouter
