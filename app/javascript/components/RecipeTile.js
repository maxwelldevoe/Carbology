import React from 'react'
import { Link } from 'react-router'

const RecipeTile = (props) => {
  return(
    <Link to={`/recipes/${props.id}`}>
      <span className="recipe_tile large-offset-1 large-5 small-12 columns">
        <h2>{ props.title }</h2>
        <p>{ props.description }</p>
        <img id="food-image" src={ props.image.url } alt="Food" />
      </span>
  </Link>
  )
}

export default RecipeTile
