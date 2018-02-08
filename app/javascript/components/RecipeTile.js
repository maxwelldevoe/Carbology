import React from 'react'
import { Link } from 'react-router'

const RecipeTile = (props) => {
  return(
    <Link to={`/recipes/${props.id}`}>
    <span className="recipe_tile">
      <h2>{ props.title }</h2>
      <p>{ props.description }</p>
    </span>
  </Link>
  )
}

export default RecipeTile
