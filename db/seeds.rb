# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




recipes = [
  {title: "Fire Cider", ingredients: "1/3 cup of horseradish root, 1 bulb of garlic, 1/2 cup of chopped onion, 1/3 cup of grated ginger, 1/3 cup of grated turmeric, 5 diced habeneros, 3-5 tbs of honey, 1 quart of apple cider vineger", instructions: "Dice everything small and store in a jar for 4 weeks, strain through cheesecloth and store in fridge for up to a year, drink 1 tsp every morning or 1 shot every morning during cold season", description: "Herbal tonic good for colds"},
  {title: "Chicken Cacciatore", ingredients: "4 bone in chicken thighs, 1/2 sweet onion diced, 5 cloves of garic minced, 1 red bell pepper chopped, 1 28oz can of crushed tomatoes, 3/4 cup of dry white wine, 3/4 cup of chicken broth, 1 tbs of: salt/pepper/basil/oregano/crushed red pepper flakes, 1/2 cup of flour, 4 tbs of olive oil", instructions: "Heat 2 tbs of olive oil in a deep saute pan or Dutch oven. Dredge chicken in flour, Brown both sides and put aside when done, In the same pan add the other 2 tbs of olive oil and saute onion pepper and garlic until soft, add wine and let reduce slightly, Add tomatoes stock and spices, stir and bring to a boil, reduce to medium simmer and cover, simmer for a half hour", description: "Classic Italian chicken and tomato sauce dish"},
  {title: "Baked Mac and Cheese", ingredients: "1 lb of macaroni or cavatelli pasta, 2 24oz bags of shredded cheddar cheese, 3 tbs of salted butter, 2 tbs of flour, 1 pint of heavy cream, 1 cup of breadcrumbs or crushed ritz crackers, 1 tsp of: salt/pepper/paprika", instructions: "Preheat oven to 350 degrees, Cook pasta, Melt butter in a medium sauce pot, Mix in flour and stir, Add cream and simmer until sauce thickens slightly, Add 1.5 bags of cheese and stir until melted, Stir in seasonings, Mix in pasta and transfer to casserole dish, Top with the remaining cheese and breadcrumbs, Cook until the top cheese is melted and bottom cheese bubbles on the side(roughly 15 minutes)", description: "Classic American comfort dish"}
]

recipes.each do |recipe|
  Recipe.create(recipe)
end
