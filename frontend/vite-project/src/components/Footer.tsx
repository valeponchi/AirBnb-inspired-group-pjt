import React from 'react'
import styled from 'styled-components'
import { MdCopyright } from 'react-icons/md'

function Footer({ className }) {
	return (
		<footer className={className}>
			<div>
				<MdCopyright className="icon" />
				<p>Assignment Project Valentina, Anas, Sean</p>
			</div>
		</footer>
	)
}

export default styled(Footer)`
	display: grid;
	place-content: center;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 0.8rem;

	div {
		display: grid;
		grid-template-columns: 30px 1fr;
		place-items: center;
	}

	.icon {
		font-size: 1.2rem;
	}
`
