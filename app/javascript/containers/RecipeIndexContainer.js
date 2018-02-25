import React, { Component } from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import RecipeIndexBox from '../components/RecipeIndexBox'
import { Link } from 'react-router'

class RecipeIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      searchTerm: ''
    }
    this.searchHandler = this.searchHandler.bind(this)
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

  searchHandler(event) {
    let searchWord = event
    this.setState({searchTerm: searchWord});
  }

  render() {
    let recipes = this.state.recipes
    let recipeIndexBoxComponent

    if (recipes !== []) {
      recipes = this.state.recipes.filter((recipe) => {
        return recipe.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) != -1;
      })
      recipeIndexBoxComponent =
            <RecipeIndexBox
              recipeData={ recipes }
            />
    }

    return(
        <div className="small-12 large-12 columns">
          <SearchInput className="search-input"
            value={this.state.searchTerm}
            onChange={this.searchHandler}
          />
          { recipeIndexBoxComponent }
        </div>
    )
  }
}

export default RecipeIndexContainer
