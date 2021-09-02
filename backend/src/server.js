const express = require('express')
const morgan = require('morgan')

const app = express()

// ROUTERS
const userRouter = require('./resources/user/router')
// const apartmentRouter = require('./resources/apartment/router')

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

// ROUTES
app.use('/users', userRouter)
// app.use('/apartments', apartmentRouter)

app.get('*', (req, res) => {
	res.status(404).json({ msg: 'No route is matching your request..' })
})

//CONNECT THE SERVER
app.listen(4000, () => {
	console.log('The server is connected!')
})
