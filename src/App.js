import * as React from 'react'
import useAsync from './utils/hooks'
import { client } from './utils/api-client'
import {FullPageSpinner, FullPageErrorFallback} from './components/lib'
import Home from './views/home'

function App() {
  
  const { run, data: Profiles, isLoading, isError, isIdle, error } = useAsync()

  React.useEffect(() => {
    run(client())
  }, [run])

  if(isIdle || isLoading){
    return <FullPageSpinner />
  }

  if(isError){
    return <FullPageErrorFallback error={error} />
  }
  
  return <Home data={Profiles.students} />
}


export default App;
