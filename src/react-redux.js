import React, { Component, createContext } from 'react';
const Context = createContext()

export class Provider extends Component {
    render() {
        return (
            < Context.Provider value={this.props.store}>
                {this.props.children}
            </Context.Provider >
        )
    }
}

export const connect = (mapStateToProps, actionCreators) => {

    return (WrappedComponent => {

        class Receiver extends Component {
            componentDidMount() {
                const { subscribe } = this.props.store
                this.unsubscribe = subscribe(() => this.forceUpdate())
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                const { dispatch, getState } = this.props.store
                const state = getState()
                let mappedProps = {}
                if (mapStateToProps) {
                    mappedProps = mapStateToProps(state)
                }
                const mappedActions = {}
                for (const key in actionCreators) {
                    const actionCreator = actionCreators[key]
                    mappedActions[key] = (...args) => {
                        actionCreator(...args)(dispatch)
                    }
                }

                return <WrappedComponent {...mappedProps} {...mappedActions} {...this.props}>
                    {this.props.children}
                </WrappedComponent>
            }
        }

        class ConnectedComponent extends Component {
            render() {

                return (
                    < Context.Consumer >
                        {(parameter) => {
                            console.log(parameter.getState())
                            return < Receiver store={parameter} {...this.props}>
                                {this.props.children}
                            </Receiver>
                        }}
                    </Context.Consumer >
                )
            }
        }
        return ConnectedComponent
    })
}
