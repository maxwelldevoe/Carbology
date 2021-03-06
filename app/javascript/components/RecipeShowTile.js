import React from 'react'

const RecipeShowTile = (props) => {
  return(
    <div className="small-12 large-8 columns">
      <h3 className="title">{ props.title }</h3>
      <div className="lists">
        <ul>{ props.ingredients }</ul>
        <ol>{ props.instructions }</ol>
      </div>
    </div>
  )
}

export default RecipeShowTile
