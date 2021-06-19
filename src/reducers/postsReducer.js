import { GETPOSTS, DELETEPOST, LIKEPOST, UNLIKEPOST } from '../actions/types'

const initialState = {
    posts: []
}
export default function (state = initialState, action) {

    switch (action.type) {

        case GETPOSTS:
            return ({
                posts: action.payload
            })
        case DELETEPOST:
            return ({
                posts: [...state.posts.filter(post => post.id !== action.payload)]
            })
        case LIKEPOST:
            return ({
                posts: state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        post.likes.push(action.payload.userId)
                    }
                    return post
                })
            })
        case UNLIKEPOST:
            return ({
                posts: state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        post.likes = post.likes.filter(like => action.payload.userId !== like)
                    }
                    return post
                })
            })

        default:
            return state

    }
}