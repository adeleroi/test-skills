import * as React from 'react'
import {InfoList} from './lib'

let Grade = ({isOpen, grades}) => {
    return isOpen ? (
        <InfoList pl="25px" lh="20px">
            {
                grades.map((score, index) => {
                    return (
                        <li key={`${score}-${index}`}>
                            <span>Test {index+1}:</span>
                            <span>{score}%</span>
                        </li>
                    )
                })
            }
        </InfoList>
    ): null
}


export default Grade