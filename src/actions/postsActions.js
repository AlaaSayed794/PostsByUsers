import { GETPOSTS, LIKEPOST, UNLIKEPOST, DELETEPOST } from './types'

export const getPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(posts => {

        dispatch({
            type: GETPOSTS,
            payload: posts.map((post) => {
                post.likes = []
                return post
            })
        })
    })
}


export const deletePost = (id) => dispatch => {
    dispatch({
        type: DELETEPOST,
        payload: id
    })
}

export const likePost = (id, userId) => dispatch => {
    dispatch({
        type: LIKEPOST, payload: { id, userId }
    })
}

export const unlikePost = (id, userId) => dispatch => {
    dispatch({
        type: UNLIKEPOST, payload: { id, userId }
    })
}