import * as React from 'react'

const initialState = {data: null, error: null, status: 'idle'}

const useAsync = () => {

    const [{data, error, status}, setState] = React.useReducer(
        (s, a) => ({...s, ...a}), initialState
    )

    const run = React.useCallback((promise) => {
        if(!promise || !promise.then){
            throw new Error('useAsync().run parameter must be a promise.')
        }
        setState({status: 'pending'})
        promise.then(
            (data) => {
                setState({data, status: 'resolved'})
                return data
            },
            (error) => {
                setState({error, status: 'rejected'})
                return Promise.reject(error)
            }
        )
    },[setState])


    return {
        isIdle: status === 'idle',
        isLoading: status === 'pending',
        isError: status === 'rejected',
        isSuccess: status === 'resolved',
        data,
        error,
        run
    }
}

export default useAsync