# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




recipes = [
  {title: "Fire Cider", ingredients: "1/3 cup of horseradish root, 1 bulb of garlic, 1/2 cup of chopped onion, 1/3 cup of grated ginger, 1/3 cup of grated turmeric, 5 diced habeneros, 3-5 tbs of honey, 1 quart of apple cider vineger", instructions: "Dice everything small and store in a jar for 4 weeks, strain through cheesecloth and store in fridge for up to a year, drink 1 tsp every morning or 1 shot every morning during cold season", description: "Herbal tonic good for colds"}
]

recipes.each do |recipe|
  Recipe.create(recipe)
end
