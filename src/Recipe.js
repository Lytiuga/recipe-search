import React, { Component } from 'react'

class Recipe extends Component {
    render() {
        return (
            <li key={this.props.id}>{this.props.title}</li>
        )
    }
}

export default Recipe