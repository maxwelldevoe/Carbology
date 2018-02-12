import React from 'react'
import RecipeTile from '../components/RecipeTile'

const RecipeIndexBox = (props) => {
  let recipeTileComponents = props.recipeData.map((recipe) => {
    return(
      <RecipeTile
        key={ recipe.id }
        id={ recipe.id }
        title={ recipe.title }
        description={ recipe.description }
        image={ recipe.image }
      />
    )
  })
  return(
    <div className="tile-container">
      { recipeTileComponents }
    </div>
  )
}

export default RecipeIndexBox
