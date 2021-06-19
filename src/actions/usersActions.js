import { GETUSERS } from './types'

export const getUsers = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(users => {

        dispatch({
            type: GETUSERS,
            payload: users.map((user, idx) => {
                user.image = `user${idx}.jpg`
                return user
            })
        })
    })
}