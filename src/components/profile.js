import * as React from 'react'
import { InfoList, Button } from './lib'
import { TagInput } from './search'
import {

    SeeMoreToggle,
    SeeMoreContent,
    SeeMoreProvider,
    SeeMoreOpenButton,
    SeeMoreCloseButton,

} from './seemore'


const Profile = React.memo(({data, addTag, }) => {
    const {
        pic,
        tags,
        email,
        skill,
        grades,
        company,
        lastName,
        firstName,
    } = data

    let average = grades.map(Number).reduce((prev, cur) => prev + cur) / grades.length

    return (
        <SeeMoreProvider>
            <div style={{
                display: 'flex', width: '100%',
                position: 'relative', backgroundColor: 'white',
               borderBottom: '1px solid #bbb5b5', padding: '0 25px', marginBottom: '15px'
            }}>
                <div style={{backgroundColor: 'white', paddingTop:'14px'}}>
                    <div style={{
                        backgroundSize: 'cover',
                        width: '140px', height: '140px', borderRadius: "50%",
                        border: '1px solid rgb(151, 139, 139)', backgroundImage: `url(${pic})`,
                    }}>
                    </div>
                </div>
                <div style={{marginLeft: '40px'}}>
                    <h1 style={{
                        margin: '0px', fontSize: '40px',
                        paddingLeft: '15px', fontFamily: 'Raleway', fontWeight: '900'
                    }}>
                        {firstName.toUpperCase()} {lastName.toUpperCase()}
                    </h1>
                    <InfoList>
                        <li>
                            <span>Email: </span>
                            <span>{email}</span>
                        </li>
                        <li>
                            <span>Company: </span>
                            <span>{company}</span>
                        </li>
                        <li>
                            <span>Skill: </span>
                            <span>{skill}</span>
                        </li>
                        <li>
                            <span>Average: </span>
                            <span>{average}%</span>
                        </li>
                    </InfoList>
                    <SeeMoreContent grades={grades}/>
                    <TagList tags={tags} />
                    <TagInput addTag={addTag} profileId={data.id}/>
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
})


const TagList = ({ tags }) => {
    return (
        tags && tags.length ? (
            <InfoList style={{display: 'flex'}}>
                {tags.map(tag => (
                    <li key={tag}>
                        <span style={{
                            marginRight: '3px',
                            padding: '7px 7px',
                            borderRadius: "5px",
                            backgroundColor:"#d7d7d7",
                        }}>
                            {tag}
                        </span>
                    </li>
                ))}
            </InfoList>
        ): null
    )
}

export default Profile