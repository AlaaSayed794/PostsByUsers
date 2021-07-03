import React, { Component } from 'react'
import Post from './Post'
import { connect } from '../react-redux'
import { ListGroup } from 'react-bootstrap'
class Home extends Component {
    render() {
        console.log("home posts")
        console.log(this.props.posts)
        return (
            <ListGroup>
                {this.props.posts.filter(post => this.props.currentUser.id != post.userId).map(post => (
                    <ListGroup.Item key={post.id}><Post post={post} image={this.props.users.find(x => x.id == post.userId).image} /></ListGroup.Item>
                ))}
            </ListGroup>
        )
    }
}

const mapStateToProps = state => (
    {
        currentUser: state.loginReducer.currentUser,
        posts: state.postsReducer.posts,
        users: state.usersReducer.users
    }
)

export default connect(mapStateToProps, {})(Home)