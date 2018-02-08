import React from 'react'

const RecipeShowTile = (props) => {
  return(
    <div>
      <h1 id="title">{ props.title }</h1>
      <div className="lists">
        <ul>{ props.ingredients }</ul>
        <ol>{ props.instructions }</ol>
      </div>
    </div>
  )
}

export default RecipeShowTile
