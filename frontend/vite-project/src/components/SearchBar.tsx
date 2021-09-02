import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {useHistory} from "react-router-dom"

function SearchBar({className}){
    const [search, setSearch] = useState("")

    const history = useHistory()

    function onSubmit(e) {
        e.preventDefault()
        history.push(`/staysin/${search}`)
        setSearch("")
    }
    return(

        <form onSubmit={onSubmit} className={className}>
        <input type="text" className="searchBar" placeholder="Where you going?" value={search} onChange={e => setSearch(e.target.value)} />
    </form>


    )
}

export default styled(SearchBar)`

align-self: start;

.searchBar{
    background-color: white;
    width: 500px;
    padding: 10px;
    border: none;
    border-radius: 20px;

}


input{
    margin-right: 50px;
}


`