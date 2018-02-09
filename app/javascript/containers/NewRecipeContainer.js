import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import TextField from '../components/TextField'

class NewRecipeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        title: '',
        ingredients: '',
        instructions: '',
        description: ''
      },
      message: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormPayload = this.handleFormPayload.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(event) {
    let fieldName = event.target.name
    let input = event.target.value
    this.setFormDetail(fieldName, input)
  }

  validateField(fieldName, input) {
    let formattedInput = fieldName.replace(/_/, " ")
    if (input === '' || input === ' ') {
      let newError = { [fieldName]: `You must provide a valid ${formattedInput}` }
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

    this.validateField("title", this.state.floof.title)
    this.validateField("ingredients", this.state.floof.ingredients)
    this.validateField("instructions", this.state.floof.instructions)
    this.validateField("description", this.state.floof.description)
    if(Object.keys(this.state.errors).length === 0) {
      this.handleFormPayload()
    }
  }

  handleFormPayload() {
    let formPayLoad = {
      recipe: {
        title: this.state.title,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
        description: this.state.description
      }
    }
    fetch('/api/v1/recipes', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayLoad),
      headers: { 'Content-Type': 'application/json' }
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
        description: ''
      },
      message: '',
      errors: {}
    })
  }

  setFormDetail(key, value) {
    let oldState = this.state.floof
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
        { errorDiv }
        <form onSubmit={ this.handleSubmit } className="form-data">
          <p>{ this.state.message }</p>
          <h1>Add a Recipe</h1>
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
          <button id="clear" onClick={ this.handleClear }>Clear Form</button>
          <button className='button submit-button' onClick={ this.handleSubmit }>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewRecipeContainer
