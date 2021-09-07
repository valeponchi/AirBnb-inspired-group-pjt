import React, { useEffect, useState } from 'react'
import './styleSheets/App.css'
import { Switch, Route, Redirect, useHistory } from 'react-router'
import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'

import PlacesToStayPage from './pages/PlacesToStayPage'
import StaysInAreaPage from './pages/StaysInAreaPage'
import LoginPage, { UserCredentials } from './pages/LoginPage'

// export type User = {
// 	id: number
// 	email: string
// 	password: string
// 	role: string
// }

// type ErrorOpts = {
// 	[key: string]: null | string
// }

function App() {
	// const [loggedUser, setLoggedUser] = useState<User | null>(null)
	// const [errorStatus, setErrorStatus] = useState<string>('empty')
	// const history = useHistory()
	// import { getValidateCurrToken, postLoginUser } from './utils/apiClient'

	// function loginUser(userCreds: UserCredentials) {
	// 	postLoginUser(userCreds).then(user => {
	// 		setLoggedUser(user)
	// 		history.push('/')
	// 	})
	// }

	// useEffect(() => {
	// 	getValidateCurrToken()
	// 		.then(user => {
	// 			setLoggedUser(user)
	// 			history.push('/')
	// 		})
	// 		.catch(err => {
	// 			setErrorStatus(err.message)
	// 		})
	// }, [])

	// function clearUserState(data: null) {
	// 	setLoggedUser(data)
	// }

	// const errorMsgs: ErrorOpts = {
	// 	empty: null,
	// 	401: "You weren't previously logged in",
	// 	403: null,
	// }

	return (
		<div className="App ">
			<Switch>
				<Route path="/" exact>
					<Redirect to="/home" />
				</Route>
				<Route path="/home">
					<HomePage />
				</Route>
				<Route path="/placestostay">
					<PlacesToStayPage />
				</Route>
				<Route path="/hosting"></Route>
				<Route path="/login-host">
					<LoginPage />
				</Route>
				<Route path="/staysin/:search">
					<StaysInAreaPage />
				</Route>
			</Switch>
		</div>
	)
}

export default App
