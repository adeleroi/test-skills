import * as React from 'react'
import styled from 'styled-components'


let Search = ({ onChange, placeholder }) => {
    let handleChange = (e) => {
        onChange(e.target.value)
    }

    return <SearchInput type="search" placeholder={placeholder} onChange={handleChange} /> 
}

let TagInput = ({ addTag, profileId }) => {
    let handleSubmit = (e) => {
        e.preventDefault()
        addTag(profileId, e.target.elements.addTag.value)
        e.target.elements.addTag.value= ""
    }
    return (
        <form onSubmit={handleSubmit} style={{padding: '0 40px'}}>
            <SearchInput type="search" placeholder="Add a tag" name="addTag" width="150px" fs="16px" autoComplete="off"/>
        </form>
    )
}

let SearchInput = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #bbb5b5;
    width: ${({width}) => width ? width : "96%"};
    outline: none;
    font-family:Raleway;
    font-size: ${({fs}) => fs ? fs : "25px"};
    margin-bottom: 15px;
    padding-bottom: 7px;
    :focus{
        border-bottom: 1px solid black;
    }
`

export {
    Search,
    TagInput,
}