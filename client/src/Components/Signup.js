import React, { Component } from 'react'

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: '',
                password: '',
                name: {
                    first: '',
                    last: ''
                }
            }
        }
    }

    handleChange = (e) => {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: '',
                username: '',
                password: ''
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
