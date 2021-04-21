import * as React from 'react'
import styled from 'styled-components'


let Search = ({onChange, placeholder}) => {
    let handleChange = (e) => {
        onChange(e.target.value)
    }

    return <SearchContainer type="search" placeholder={placeholder} onChange={handleChange} /> 
}

let SearchContainer = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #bbb5b5;
    width: 96%;
    outline: none;
    font-family:Raleway;
    font-size: 25px;
    margin-bottom: 15px;
    :focus{
        border-bottom: 1px solid black;
    }
`

export {
    Search,
}