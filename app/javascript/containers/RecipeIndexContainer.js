import React, { Component } from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import RecipeTile from '../components/RecipeTile'

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
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json()
      })
      .then(body =>
        this.setState({ recipes: body }),
      )
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    let recipes = this.state.recipes,
    recipeTileComponents

    if (recipes !== []) {
      recipeTileComponents = recipes.map((recipe) => {
        return(
          <RecipeTile
            key={ recipe.id }
            title={ recipe.title }
            description={ recipe.description }
          />
        )
      })
    }

    return(
      <div>
        { recipeTileComponents }
      </div>
    )
  }
}

export default RecipeIndexContainer
