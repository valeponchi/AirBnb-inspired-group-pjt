import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useStore from '../store'
// import { FaBeer } from 'react-icons/fa';

function HostingPage({ className }) {
	const loggedUser = useStore(state => state.loggedUser)
	const history = useHistory()

	// useEffect(() => {
	//   if (!loggedUser) history.push("/login-host");
	// }, [loggedUser]);
	return (
		<>
			<Header />

			<main className={className}>
				<form
					className="becomeAHost container"
					// you have to send also role:host !!}
					// onSubmit={e => {
					// 	e.preventDefault()
					// 	handleSubmit(loginForm)
					// }}
				>
					<h2>Become a host</h2>
					<input
						// onChange={handleChange}
						type="email"
						placeholder="Email"
						name="email"
						// value={loginForm.email}
					/>
					<input
						// onChange={handleChange}
						type="password"
						placeholder="Password"
						name="password"
						// value={loginForm.password}
					/>
					<input
						// onChange={handleChange}
						type="text"
						placeholder="firstName"
						name="firstName"
						// value={loginForm.password}
					/>
					<input
						// onChange={handleChange}
						type="text"
						placeholder="lastName"
						name="lastName"
						// value={loginForm.password}
					/>
					<input
						// onChange={handleChange}
						type="date"
						placeholder="dateOfBirth"
						name="dateOfBirth"
						// value={loginForm.password}
					/>
					<button className="btnBecomeHost">Become a Host</button>
					{/* <input type="submit" value="Login" /> */}
				</form>
			</main>
			<Footer />
		</>
	)
}

export default styled(HostingPage)`
	h2 {
		margin-top: 20px;
		color: #ff5a5f;
	}

	display: grid;

	.becomeAHost {
		display: grid;
		height: calc(100vh - 112px);
		place-items: center;
		align-content: center;
		grid-template-rows: repeat(3, 50px);
		grid-gap: 20px;
	}

	input,
	button {
		width: 400px;
		height: 50px;
		border-radius: 20px;
		border: 1px solid lightgrey;
		padding: 10px;
	}

	.btnBecomeHost:hover {
		background-color: #ff5a6086;
	}
`
