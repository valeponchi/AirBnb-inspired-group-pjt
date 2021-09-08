const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')

const cors = require('cors')

const app = express()

// ROUTERS
const authRouter = require('./resources/auth/router')
const loginAuth = require('./middleware/login')
const userRouter = require('./resources/user/router')
// const apartmentRouter = require('./resources/apartment/router')

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000', credentials: true })) // Enables the OPTIONS request check in our API

// Auth
// This is NOT under login protection
app.use(authRouter)
// This is your gate keeper to make sure the user is logged in!
// Any route after this one will be protected by login!
app.use(loginAuth)

// ROUTES
app.use('/users', userRouter)

app.get('*', (req, res) => {
	res.status(404).json({ msg: 'No route is matching your request..' })
})

//CONNECT THE SERVER
app.listen(4000, () => {
	console.log('The server is connected!')
})
