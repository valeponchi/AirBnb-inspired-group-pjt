import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useStore from '../store'

const initialForm = {
	email: '',
	password: '',
	firstName: '',
	lastName: '',
	dateOfBirth: '',
}

export type UserCredentials = {
	email: string
	password: string
	firstName: string
	lastName: string
	dateOfBirth: string
}

type LoginProps = {
	className: string
}

function HostingPage({ className }: LoginProps) {
	const loggedUser = useStore(state => state.loggedUser)
	const setLoggedUser = useStore(store => store.setLoggedUser)

	const [becomeAHostForm, setbecomeAHostForm] =
		useState<UserCredentials>(initialForm)

	const history = useHistory()

	var today = new Date()

	function handleChange(e: SyntheticEvent) {
		const { name, value } = e.target as HTMLInputElement

		setbecomeAHostForm({ ...becomeAHostForm, [name]: value })
	}

	function handleSubmit(becomeAHostForm: UserCredentials) {
		fetch('http://localhost:4000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({ ...becomeAHostForm, role: 'host' }),
		})
			.then(resp => resp.json())
			.then(user => {
				setLoggedUser(user)
				console.log(loggedUser)
				history.push(`/dashboard/${user.id}`)
			})
		setbecomeAHostForm(initialForm)
	}

	return (
		<>
			<Header />

			<main className={className}>
				<form
					className="becomeAHost container"
					// you have to send also role:host !!}
					onSubmit={e => {
						e.preventDefault()
						handleSubmit(becomeAHostForm)
					}}>
					<h2>Become a host</h2>
					<input
						onChange={handleChange}
						type="email"
						placeholder="Email"
						name="email"
						required
						value={becomeAHostForm.email}
					/>
					<input
						onChange={handleChange}
						type="password"
						placeholder="Password"
						name="password"
						required
						min={10}
						value={becomeAHostForm.password}
					/>
					<input
						onChange={handleChange}
						type="text"
						placeholder="firstName"
						name="firstName"
						required
						min={2}
						max={15}
						value={becomeAHostForm.firstName}
					/>
					<input
						onChange={handleChange}
						type="text"
						placeholder="lastName"
						name="lastName"
						required
						min={2}
						max={15}
						value={becomeAHostForm.lastName}
					/>
					<input
						onChange={handleChange}
						type="date"
						placeholder="dateOfBirth"
						name="dateOfBirth"
						required
						max={today}
						value={becomeAHostForm.dateOfBirth}
					/>
					<button className="btnBecomeHost">Become a Host</button>
				</form>
			</main>
			<Footer />
		</>
	)
}

export default styled(HostingPage)`
	h2 {
		margin-top: 20px;
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
		color: white;
	}
`
