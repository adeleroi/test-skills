import * as React from 'react'
import useAsync from './utils/hooks'
import {FullPageSpinner, FullPageErrorFallback, Panel, MainPanel} from './components/lib'
import { client } from './utils/api-client'
import Profile from './components/profile'
import { Search } from './components/search'

function App() {
  
  const { run, data, isLoading, isError, isIdle, error } = useAsync()
  let [name, setName] = React.useState("")
  let [tag, setTag] = React.useState("")

  let FilterByName = React.useCallback((obj) => {
    let nom = name.toLowerCase()
    if(obj.lastName.toLowerCase().includes(nom) || obj.firstName.toLowerCase().includes(nom)){  
      return true
    }
    return false
  }, [name])

  let handleNameChange = (val) => {
    setName(val)
  }
  
  let handleTagChange = (val) => {
    setTag(val)
  }

  React.useEffect(() => {
    run(client())
  }, [run])

  if(isIdle || isLoading){
    return <FullPageSpinner />
  }

  if(isError){
    return <FullPageErrorFallback error={error} />
  }
  
  return(
    <MainPanel>
      <Search placeholder="Search by name" onChange={handleNameChange}/>
      <Search placeholder="Search by tag" onChange={handleTagChange}/>
      <Panel>
        {data.students.filter(FilterByName).map(data => <Profile data={data} key={`${data.lastName}-${data.id}`} />)}
      </Panel>
    </MainPanel>
  )
}


export default App;
