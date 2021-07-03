import React, { Component } from 'react';
import { connect } from '../react-redux'
import { deletePost } from '../actions/postsActions'
import { Card, Button } from 'react-bootstrap'
class Post extends Component {
    onClick = () => {
        this.props.deletePost(this.props.post.id)
    }
    render() {
        return (
            <Card >
                <Card.Img style={{ height: 160, width: 240 }} variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.post.title}</Card.Title>
                    <Card.Text>
                        {this.props.post.body}
                    </Card.Text>
                    <Button variant="danger" onClick={this.onClick}>Delete Post</Button>
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


export default connect(mapStateToProps, { deletePost })(Post);
