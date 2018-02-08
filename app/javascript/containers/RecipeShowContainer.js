import React, { Component } from 'react'
import RecipeShowTile from '../components/RecipeShowTile'

class RecipeShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {},
      user: {}
    }
  }

  componentDidMount() {
    let id = this.props.params.id;
    fetch(`/api/v1/recipes/${id}.json`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ recipe: body })
      })

      fetch(`/api/v1/users.json`, { credentials: 'same-origin' })
      .then(response => {
        return response.json()
      })
      .then(body => {
        this.setState({ user: body.current_user })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }




  render() {
    let recipeData= this.state.recipe
    let ingredientArray = []
    let instructionArray = []
    if(this.state.recipe.ingredients !== undefined) {
      ingredientArray = this.state.recipe.ingredients.split('; ').map((ingredient) => {
        return <li>{ ingredient }</li>
      })
    }
    if(this.state.recipe.instructions !== undefined) {
      instructionArray = this.state.recipe.instructions.split('; ').map((instruction) => {
        return <li>{ instruction }</li>
      })
    }
    return(
      <div>
        <div className="recipe_show_tile">
          <RecipeShowTile
            id={ recipeData.id }
            title={ recipeData.title }
            ingredients={ ingredientArray }
            instructions={ instructionArray }
          />
        </div>
      </div>
    )
  }
}

export default RecipeShowContainer
