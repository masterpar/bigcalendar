
const baseUrl = process.env.REACT_APP_API_URL


export const fetchNotToken = (endpont, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpont }`

    if(method === 'GET'){
        return fetch(url)
    } else {
        return fetch(url,{
            method,
            headers : {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data)
        }).catch(e => {
            console.log(e)
        })
    }
}

export const fetchWithToken = (endpont, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpont }`
    const token = localStorage.getItem('token' || '')

    if(method === 'GET'){
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        })
    } else {
        return fetch(url,{
            method,
            headers : {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data)
        }).catch(e => {
            console.log(e)
        })
    }
}
