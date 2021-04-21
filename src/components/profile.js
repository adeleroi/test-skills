import * as React from 'react'
// import styled from 'styled-components'
import {InfoList, Button} from './lib'
import {

    SeeMoreToggle,
    SeeMoreContent,
    SeeMoreProvider,
    SeeMoreOpenButton,
    SeeMoreCloseButton,

} from './seemore'



const Profile = ({data}) => {
    
    let average = data.grades.map(Number).reduce((prev, cur) => prev + cur) / data.grades.length
    
    return (
        <SeeMoreProvider>
            <div style={{display: 'flex', width: '100%', position: 'relative', backgroundColor: 'white',
               borderBottom: '1px solid #bbb5b5', padding: '0 25px', marginBottom: '15px'}}>
                <div style={{backgroundColor: 'white', paddingTop:'14px'}}>
                    <div style={{width: '140px', height: '140px', borderRadius: "50%",
                        border: '1px solid rgb(151, 139, 139)', backgroundImage: `url(${data.pic})`,
                        backgroundSize: 'cover'
                    }}>
                    </div>
                </div>
                <div style={{marginLeft: '40px'}}>
                    <h1 style={{margin: '0px', fontSize: '40px', paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: '900'}}>
                        {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}
                    </h1>
                    <InfoList>
                        <li>
                            <span>Email: </span>
                            <span>{data.email}</span>
                        </li>
                        <li>
                            <span>Company: </span>
                            <span>{data.company}</span>
                        </li>
                        <li>
                            <span>Skill: </span>
                            <span>{data.skill}</span>
                        </li>
                        <li>
                            <span>Average: </span>
                            <span>{average}%</span>
                        </li>
                    </InfoList>
                    <SeeMoreContent grades={data.grades}/>
                </div>
                <div style={{position: 'absolute', right: '60px'}}>
                    <SeeMoreToggle
                        open ={
                            <SeeMoreOpenButton>
                                <Button>+</Button>
                            </SeeMoreOpenButton>
                        }
                        close = {
                            <SeeMoreCloseButton>
                                <Button style={{paddingRight: '13px', paddingTop: '15px'}}>l</Button>
                            </SeeMoreCloseButton>
                        }
                    />
                </div>
            </div>
        </SeeMoreProvider>
    )
}


export default Profile