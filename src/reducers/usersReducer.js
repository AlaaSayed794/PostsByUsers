import { GETUSERS } from '../actions/types'

const initialState = {
    users: []
}
export default function (state = initialState, action) {

    switch (action.type) {

        case GETUSERS:
            return ({
                users: action.payload
            })
        default:
            return state

    }
}