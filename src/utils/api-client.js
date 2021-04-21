const apiURL = process.env.REACT_APP_API_URL

let client = async ({customHeaders, ...customConfig}={}) => {
    let config = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            ...customHeaders
        },
        ...customConfig
    }
    return fetch(apiURL, {config}).then(
        async (response) => {
            const data = await response.json()
            if(response.ok){
                return data
            }else{
                return Promise.reject(response)
            }
        }
    )
}

export {client}