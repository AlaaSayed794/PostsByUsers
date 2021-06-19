import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getUsers } from './actions/usersActions'
import { getPosts } from './actions/postsActions'
import { connect } from 'react-redux'
import Layout from './components/Layout'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            this.props.currentUser ?
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/profile' component={Profile} />
                </Layout> : <Login />
        )
    }
}

const mapStateToProps = state => (
    {
        posts: state.postsReducer.posts,
        currentUser: state.loginReducer.currentUser
    }
)
export default connect(mapStateToProps, { getPosts, getUsers })(App)