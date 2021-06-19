import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from "../actions/loginActions"
import { getUsers } from '../actions/usersActions'
import { Form, Button } from 'react-bootstrap'
import LoadingOverlay from 'react-loading-overlay'

class Login extends Component {
    state = {
        user: -1,
        loading: true
    }
    componentDidMount() {
        this.props.getUsers()
        this.setState({ loading: false })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.props.users) {
            let user = this.state.user > -1 ? this.state.user : 1
            this.props.login(this.props.users.find(x => x.id == user))
        }
        else {
            alert("no users found")
        }
    }
    render() {
        return (
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text="please wait.."
            >
                <h1>please login to continue</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Control as="select" size="lg" name="user" onChange={this.onChange} >
                            {this.props.users.map(user =>
                            (
                                <option key={user.id} value={user.id} >{user.name}</option>
                            ))}
                        </Form.Control>
                        <Button type="submit">Login</Button>
                    </Form.Group>
                </Form>
            </LoadingOverlay>
        )
    }
}

const mapStateToProps = state => (
    {
        users: state.usersReducer.users,
    }
)
export default connect(mapStateToProps, { login, getUsers })(Login)
