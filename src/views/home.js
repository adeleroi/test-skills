import * as React from 'react'
import Profile from '../components/profile'
import { Search } from '../components/search'
import { Panel, MainPanel } from '../components/lib'


const Home = ({data}) => {
    const [filteredData, setFilteredData] = React.useState(data ? data : null)
    let [name, setName] = React.useState("")
    let [tag, setTag] = React.useState("")

    React.useEffect(() => {
        
        let FilterByName = (obj) => {
            if(!tag && !name) return true
            let {
                tags,
                lastName,
                firstName,
            } = obj
            let nom = name.toLowerCase()
            let ta = tag.toLowerCase()
            let nameCondition = lastName.toLowerCase().includes(nom) || firstName.toLowerCase().includes(nom)
            let tagCondition = tags && !!tags.find(tg => tg.includes(ta))
            if(name && !tag){
                if(nameCondition){  
                    return true
                }
                return false
            }else if(tag && !name){
                if(tagCondition){
                    return true
                }
                return false
            }else{
                if(tagCondition && nameCondition){
                    return true
                }
                return false
            }
        }
        setFilteredData(data.filter(FilterByName))
    }, [name, tag, data])
  
    let handleNameChange = (val) => {
      setName(val)
    }
    
    let handleTagChange = (val) => {
      setTag(val)
    }
    
    let addTag = (profileId, value) => {
        const profile = filteredData.find(obj => obj.id === profileId)
        profile.tags = !profile.tags ? [value.trim()] : [...profile.tags, value.trim()]
        const updatedData = [...filteredData]
        setFilteredData(updatedData)
    }

    return (
        <MainPanel>
            <Search placeholder="Search by name" onChange={handleNameChange} />
            <Search placeholder="Search by tag" onChange={handleTagChange} />
            <Panel>
                {filteredData && filteredData.map(
                    data => <Profile data={data} key={`${data.lastName}-${data.id}`} addTag={addTag}/>
                )}
            </Panel>
        </MainPanel>
    )
}

export default Home