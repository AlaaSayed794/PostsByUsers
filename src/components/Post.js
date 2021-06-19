import React, { Component } from 'react';
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../actions/postsActions'
import { Card, Button } from 'react-bootstrap'
class Post extends Component {
    onClick = () => {
        const liked = this.props.post.likes.includes(this.props.currentUser.id)
        if (liked) {
            console.log("liked")
            this.props.unlikePost(this.props.post.id, this.props.currentUser.id)
        } else {
            console.log("unliked")

            this.props.likePost(this.props.post.id, this.props.currentUser.id)
        }
    }
    render() {
        const liked = this.props.post.likes.includes(this.props.currentUser.id)
        return (
            <Card >
                <Card.Img style={{ height: 160, width: 240 }} variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.post.title}</Card.Title>
                    <Card.Text>
                        {this.props.post.body}
                    </Card.Text>
                    <Button variant={liked ? "success" : "primary"} onClick={this.onClick}>{liked ? "Unlike" : "Like"}</Button>
                    <div>likes ={this.props.post.likes.length}</div>
                </Card.Body>
            </Card>
        );
    }
}

const mapStateToProps = state => (
    {
        currentUser: state.loginReducer.currentUser,
        posts: state.postsReducer.posts,
    }
)


export default connect(mapStateToProps, { likePost, unlikePost })(Post);
