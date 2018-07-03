import React, { Component } from 'react'
import axios from 'axios'
import Recipes from './Recipes'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            results: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getRecipes = this.getRecipes.bind(this)
    }

    getRecipes = () => {
        axios.get(`http://food2fork.com/api/search?key={API KEY IN HERE}&q=${this.state.value}`)
            .then(({data}) => {
                this.setState({
                    results: data.recipes
                })
            })
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        this.getRecipes()
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Main Ingredient
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <h3>
                        {this.state.value}
                    </h3>
                </div>
                <hr />
                <Recipes results={this.state.results}/>
            </div>
        )
    }
}

export default Search