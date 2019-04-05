import axios from 'axios'

export function login(id, password) {
    return axios.post('/v1/login', {
        email: id,
        password: password
    }).then(res => {
        return { res }
    }).catch(error => {
        console.log(error)
        return { error }
    })
    
}