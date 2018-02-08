require "rails_helper"

RSpec.describe Api::V1::RecipesController, type: :controller do
  let!(:first_recipe) { Recipe.create(title: "Hot Dog", ingredients: "hot dog, bun, ketchup", instructions: "boil hot dog, toast bun, add ketchup", description: "ball park favorite") }

  describe "GET#show" do
    it 'should return the specified recipe' do

      get :show, params: { id: first_recipe.id }
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 5

      expect(returned_json["title"]).to eq first_recipe.title
      expect(returned_json["ingredients"]).to eq first_recipe.ingredients
      expect(returned_json["instructions"]).to eq first_recipe.instructions
      expect(returned_json["description"]).to eq first_recipe.description
    end
  end

  describe "POST#create" do
    it "creates a new recipe" do
      recipe_to_be = { recipe: { title: "Burger", ingredients: "burger, bun, ketchup", instructions: "cook burger, toast bun, add ketchup", description: "another ball park favorite" }}
      prev_count = Recipe.count
      post(:create, params: recipe_to_be)
      expect(Recipe.count).to eq(prev_count + 1)
    end

    it "should return the newly created recipe" do
      recipe_to_be = { recipe: { title: "Burger", ingredients: "burger, bun, ketchup", instructions: "cook burger, toast bun, add ketchup", description: "another ball park favorite" }}
      post(:create, params: recipe_to_be)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["title"]).to eq(recipe_to_be[:recipe][:title])
      expect(returned_json["ingredients"]).to eq(recipe_to_be[:recipe][:ingredients])
      expect(returned_json["instructions"]).to eq(recipe_to_be[:recipe][:instructions])
      expect(returned_json["description"]).to eq(recipe_to_be[:recipe][:description])
    end

    it "should return status 422 and errors if recipe is not created" do
      recipe_to_be = { recipe: { title: "Hot Dog"}}
      post(:create, params: recipe_to_be)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 422
      expect(response.content_type).to eq("application/json")

      expect(returned_json["error"][0]).to eq("Ingredients can't be blank")
      expect(returned_json["error"][1]).to eq("Instructions can't be blank")
      expect(returned_json["error"][2]).to eq("Description can't be blank")
    end
  end
end
