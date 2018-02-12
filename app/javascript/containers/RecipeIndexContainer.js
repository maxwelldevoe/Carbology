import React, { Component } from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import RecipeIndexBox from '../components/RecipeIndexBox'
import { Link } from 'react-router'

class RecipeIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/recipes.json')
    .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body =>
        this.setState({ recipes: body }),
      )
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  render() {
    let recipes = this.state.recipes
    
    return(
      <div>
        <RecipeIndexBox
          recipeData={ recipes }
        />
        <Link to={ '/recipes/new' }>
          <button className='button'>Add Recipe</button>
        </Link>
      </div>
    )
  }
}

export default RecipeIndexContainer
