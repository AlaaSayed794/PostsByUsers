import { LOGIN } from '../actions/types'

const initialState = {
    currentUser: null
}
export default function (state = initialState, action) {

    switch (action.type) {

        case LOGIN:
            return ({
                currentUser: action.payload
            })
        default:
            return state

    }
}