import React, { Component } from 'react'

export default class StudentFrom extends Component {

    state = {
        name: "",
        house: ""
    }

    handleChange = (event) => {
        return this.setState({
            [event.target.name]: event.target.value             
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        this.props.addNewCharacter(this.state)

        this.setState({
            name: "",
            house: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="name" value={this.state.name} placeholder="Enter Name" onChange={this.handleChange}/>
                <input name="house" value={this.state.house} placeholder="choose house" onChange={this.handleChange}/>
                <input type="submit" value="Join your house"/>
            </form>
        )
    }
}
