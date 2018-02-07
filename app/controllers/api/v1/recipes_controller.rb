class Api::V1::RecipesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    recipe = Recipe.all
    render json: recipe
  end

  def show
    render json: Recipe.find(params[:id])
  end

  def create
    recipe = Recipe.new(recipe_params)
    if floof.save
      render json: recipe
    else
      render json:{ error: recipe.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :ingredients, :instructions)
  end
end
