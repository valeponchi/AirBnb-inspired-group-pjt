import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useStore from '../store'

const initialForm = {
	priceNight: 0,
	bedrooms: 0,
	maxPeopleIn: 0,
	description: '',
	city: '',
	postCode: '',
	road: '',
	imageUrl1: '',
	imageUrl2: '',
	imageUrl3: '',
	wifi: false,
	smartTV: false,
	microwave: false,
	coffeeMaker: false,
	hotTub: false,
	parkingSpace: false,
	garden: false,
	pool: false,
	gym: false,
}

export type UserCredentials = {
	priceNight: number
	bedrooms: number
	maxPeopleIn: number
	description: string
	city: string
	postCode: string
	road: string
	imageUrl1: string
	imageUrl2: string
	imageUrl3: string
	wifi: boolean
	smartTV: boolean
	microwave: boolean
	coffeeMaker: boolean
	hotTub: boolean
	parkingSpace: boolean
	garden: boolean
	pool: boolean
	gym: boolean
}

type LoginProps = {
	className: string
}

function HostAddOne({ className }: LoginProps) {
	const loggedUser = useStore(state => state.loggedUser)
	const setLoggedUser = useStore(store => store.setLoggedUser)

	const [hostAddOneForm, sethostAddOneForm] =
		useState<UserCredentials>(initialForm)

	const history = useHistory()

	function handleChange(e: SyntheticEvent) {
		const { name, value, type } = e.target as HTMLInputElement
		if (type === 'radio') {
			sethostAddOneForm(state => ({ ...state, [name]: !state[name] }))
		} else {
			sethostAddOneForm(state => ({ ...state, [name]: value }))
		}
	}

	function handleSubmit(hostAddOneForm: UserCredentials) {
		fetch('http://localhost:4000/users/:id/apartments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body: JSON.stringify({ hostAddOneForm }),
		})
			.then(resp => resp.json())
			.then(newApartment => {
				console.log(newApartment)
				// history.push(`/dashboard/${newApartment.user.id}`)
			})
		sethostAddOneForm(initialForm)
	}
	console.log('hostAddOneForm: ', hostAddOneForm)
	return (
		<>
			<Header />

			<main className={className}>
				<form
					className="hostAddOne container"
					onSubmit={e => {
						e.preventDefault()
						handleSubmit(hostAddOneForm)
					}}>
					<h2>Add an apartment</h2>
					<label className="hostAddOne">
						<input
							// 						onChange={handleChange}
							type="number"
							placeholder="price per Night"
							name="priceNight"
							required
							value={hostAddOneForm.priceNight}
						/>{' '}
						Price per Night
					</label>
					<label>
						<input
							onChange={handleChange}
							type="number"
							value={hostAddOneForm.bedrooms}
							name="bedrooms"
							required
							placeholder="Number of bedrooms"
						/>{' '}
						Number of bedrooms
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="number"
							placeholder="max of people in"
							name="maxPeopleIn"
							required
							value={hostAddOneForm.maxPeopleIn}
						/>{' '}
						Max number of people in
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="text"
							placeholder="Description"
							name="description"
							required
							value={hostAddOneForm.description}
						/>{' '}
						Description of the apartment
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="text"
							placeholder="City"
							name="city"
							required
							value={hostAddOneForm.city}
						/>{' '}
						City
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="text"
							placeholder="PostCode"
							name="postCode"
							required
							value={hostAddOneForm.postCode}
						/>{' '}
						PostCode
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="text"
							placeholder="Road name and Number"
							name="road"
							required
							value={hostAddOneForm.road}
						/>{' '}
						Road name and Number
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="text"
							placeholder="First image"
							name="imageUrl1"
							required
							value={hostAddOneForm.imageUrl1}
						/>{' '}
						First image
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="text"
							placeholder="Second image"
							name="imageUrl2"
							required
							value={hostAddOneForm.imageUrl2}
						/>{' '}
						Second image
					</label>
					<label>
						<input
							// 						onChange={handleChange}
							type="text"
							placeholder="Third image"
							name="imageUrl3"
							required
							value={hostAddOneForm.imageUrl3}
						/>{' '}
						Third image
					</label>

					<label>
						<input
							onClick={handleChange}
							type="radio"
							value="wifi"
							name="wifi"
							checked={hostAddOneForm.wifi}
						/>{' '}
						Wifi?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="smartTV"
							name="smartTV"
							checked={hostAddOneForm.smartTV}
						/>{' '}
						smartTV?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="microwave"
							name="microwave"
							checked={hostAddOneForm.microwave}
						/>{' '}
						microwave?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="coffeeMaker"
							name="coffeeMaker"
							checked={hostAddOneForm.coffeeMaker}
						/>{' '}
						coffeeMaker?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="hotTub"
							name="hotTub"
							checked={hostAddOneForm.hotTub}
						/>{' '}
						hotTub?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="parkingSpace"
							name="parkingSpace"
							checked={hostAddOneForm.parkingSpace}
						/>{' '}
						parkingSpace?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="garden"
							name="garden"
							checked={hostAddOneForm.garden}
						/>{' '}
						garden?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="pool"
							name="pool"
							checked={hostAddOneForm.pool}
						/>{' '}
						pool?
					</label>

					<label>
						<input
							className="radioBtn"
							onClick={handleChange}
							type="radio"
							value="gym"
							name="gym"
							checked={hostAddOneForm.gym}
						/>{' '}
						gym?
					</label>

					<button className="btnHostAddOne">Add apartment</button>
				</form>
			</main>
			<Footer />
		</>
	)
}

export default styled(HostAddOne)`
	h2 {
		margin-top: 20px;
	}

	display: grid;

	.hostAddOne {
		place-items: center;
		align-content: center;
		grid-template-rows: repeat(3, 50px);
		grid-gap: 20px;
	}

	input,
	button {
		margin-top: 15px;
		width: 400px;
		height: 50px;
		border-radius: 20px;
		border: 1px solid lightgrey;
		padding: 10px;
	}

	label {
		display: block;
	}

	.btnHostAddOne:hover {
		background-color: #ff5a6086;
		color: white;
	}
`
