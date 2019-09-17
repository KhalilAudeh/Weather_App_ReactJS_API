import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."></input>
                <input type="text" name="country" placeholder="Country..."></input>
                <button>GET Weather</button>
            </form>
        )
    }
}

export default Form
