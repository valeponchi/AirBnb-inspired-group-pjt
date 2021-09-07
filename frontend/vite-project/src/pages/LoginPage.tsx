import React, { SyntheticEvent, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const initialForm = {
	email: '',
	password: '',
}

export type UserCredentials = {
	email: string
	password: string
}

type LoginProps = {
	handleSubmit: (formData: { password: string; email: string }) => void
}

function LoginPage({ className, handleSubmit }: LoginProps) {
	const [loginForm, setLoginForm] = useState<UserCredentials>(initialForm)

	function handleChange(e: SyntheticEvent) {
		const { name, value } = e.target as HTMLInputElement

		setLoginForm({ ...loginForm, [name]: value })
	}

	return (
		<div className={className}>
			<Header />
			<main>
				<form
					className="loginForm container"
					onSubmit={e => {
						e.preventDefault()
						handleSubmit(loginForm)
					}}>
					<input onChange={handleChange} type="email" placeholder="Email" />
					<input
						onChange={handleChange}
						type="password"
						placeholder="Password"
					/>
					<button>Login</button>
					{/* <input type="submit" value="Login" /> */}
				</form>
			</main>
		</div>
	)
}

export default styled(LoginPage)`
	display: grid;
	grid-template-rows: 120px 1fr;

	.loginForm {
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
`
