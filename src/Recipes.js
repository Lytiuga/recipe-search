import React, { Component } from 'react'
import Recipe from './Recipe'

const Recipes = (props) => {

    const recipeList = props.results.map(recipe => (
        <Recipe
            key={recipe.recipe_id}
            title={recipe.title}
        />
    ))
    return recipeList

}

export default Recipes