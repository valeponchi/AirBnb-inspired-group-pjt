import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Header from '../components/Header'
import useStore from '../store'

function PlacesToStayPage({userLoggedIn, setUserLoggedIn}) {
	return (
		<>
			<Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
		</>
	)
}

export default styled(PlacesToStayPage)``
