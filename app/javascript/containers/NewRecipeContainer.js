import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import TextField from '../components/TextField'
import Uploader from './Uploader'

class NewRecipeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        title: '',
        ingredients: '',
        instructions: '',
        description: '',
        image: []
      },
      message: '',
      errors: {}
    }
    this.acceptedFile = this.acceptedFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormPayload = this.handleFormPayload.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  acceptedFile(accepted) {
    let oldState = this.state.recipe
    let newState = Object.assign({}, oldState)
    newState['image'] = accepted
    this.setState({
      recipe: newState
    })
  }

  handleChange(event) {
    let fieldName = event.target.name
    let input = event.target.value
    this.setFormDetail(fieldName, input)
  }

  validateField(fieldName, input) {
    if (input === '' || input === ' ') {
      let newError = { [fieldName]: `You must provide a valid ${fieldName}` }
      this.setState({ errors: Object.assign(this.state.errors, newError)})
    }
    else {
      let errorState = this.state.errors
      delete errorState[fieldName]
      this.setState({ errors: errorState })
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    this.validateField('title', this.state.recipe.title)
    this.validateField('ingredients', this.state.recipe.ingredients)
    this.validateField('instructions', this.state.recipe.instructions)
    this.validateField('description', this.state.recipe.description)
    if(Object.keys(this.state.errors).length === 0) {
      this.handleFormPayload()
    }
  }

  handleFormPayload() {
    let formPayLoad = new FormData()
    formPayLoad.append('title', this.state.recipe.title)
    formPayLoad.append('ingredients', this.state.recipe.ingredients)
    formPayLoad.append('instructions', this.state.recipe.instructions)
    formPayLoad.append('description', this.state.recipe.description)
    formPayLoad.append('image', this.state.recipe.image[0], this.state.recipe.image.name)
    fetch('/api/v1/recipes', {
      credentials: 'same-origin',
      method: 'POST',
      body: formPayLoad
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      browserHistory.push(`/recipes/${body.id}`)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleClear(event) {
    this.setState({
      recipe: {
        title: '',
        ingredients: '',
        instructions: '',
        description: '',
        image: []
      },
      message: '',
      errors: {}
    })
  }

  setFormDetail(key, value) {
    let oldState = this.state.recipe
    let newState = Object.assign({}, oldState)
    newState[key] = value
    this.setState({
      recipe: newState
    })
  }

  render() {
    let errorListItems
    let errorDiv

    if(Object.keys(this.state.errors).length > 0) {
      errorListItems = Object.values(this.state.errors).map((error) => {
        return <li key={error}>{error}</li>
      })
      errorDiv = <div className="errors">{ errorListItems }</div>
    }

    return(
      <div>
        <form onSubmit={ this.handleSubmit } className="form-data">
          <p>{ this.state.message }</p>
          <h1 className="form-title">Add a Recipe</h1>
          { errorDiv }
          <TextField
            label="Title"
            value={ this.state.recipe.title }
            name="title"
            handleChange={ this.handleChange }
          />
          <TextField
            label="Ingredients (separate by semicolon)"
            value={ this.state.recipe.ingredients }
            name="ingredients"
            handleChange={ this.handleChange }
          />
          <TextField
            label="Instructions (separate by semicolon)"
            value={ this.state.recipe.instructions }
            name="instructions"
            handleChange={ this.handleChange }
          />
          <TextField
            label="Descrption"
            value={ this.state.recipe.description }
            name="description"
            handleChange={ this.handleChange }
          />
          <Uploader
            acceptFile={ this.acceptedFile }
          />
          <button id="clear" onClick={ this.handleClear }>Clear Form</button>
          <button className='button submit-button' onClick={ this.handleSubmit }>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewRecipeContainer
