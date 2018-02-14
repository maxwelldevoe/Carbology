# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
#
#
# 
# recipes = [
#   {title: "Chicken Cacciatore", ingredients: "4 bone in chicken thighs; 1/2 sweet onion diced; 5 cloves of garic minced; 1 red bell pepper chopped; 1 28oz can of crushed tomatoes; 3/4 cup of dry white wine; 3/4 cup of chicken broth; 1 tbs of: salt/pepper/basil/oregano/crushed red pepper flakes; 1/2 cup of flour; 4 tbs of olive oil", instructions: "Heat 2 tbs of olive oil in a deep saute pan or Dutch oven; Dredge chicken in flour; Brown both sides and put aside when done; In the same pan add the other 2 tbs of olive oil and saute onion pepper and garlic until soft; add wine and let reduce slightly; Add tomatoes stock and spices; stir and bring to a boil; reduce to medium simmer and cover; simmer for a half hour", description: "Classic Italian chicken and tomato sauce dish", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459399/20160922-chicken-cacciatore-vicky-wasik-16-1500x1125_ejmeue.jpg"},
#   {title: "Baked Mac and Cheese", ingredients: "1 lb of macaroni or cavatelli pasta; 2 24oz bags of shredded cheddar cheese; 3 tbs of salted butter; 2 tbs of flour; 1 pint of heavy cream; 1 cup of breadcrumbs or crushed ritz crackers; 1 tsp of: salt/pepper/paprika", instructions: "Preheat oven to 350 degrees; Cook pasta; Melt butter in a medium sauce pot; Mix in flour and stir; Add cream and simmer until sauce thickens slightly; Add 1.5 bags of cheese and stir until melted; Stir in seasonings; Mix in pasta and transfer to casserole dish; Top with the remaining cheese and breadcrumbs; Cook until the top cheese is melted and bottom cheese bubbles on the side(roughly 15 minutes)", description: "Classic American comfort dish", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459474/1382540004120_scjd7f.jpg"},
#   {title: "Sausage & Kale Soup", ingredients: "1 Pack of chicken or pork sauages sliced into 1/4 inch disks; 2 15oz cans of cannelini beans; 3-5 carrots peeled and chopped; 2-4 celery stalks chopped; 3-5 cloves of garlic minced; 1 potato diced; 1 Head of kale chopped and trimmed; 64oz of low sodium chicken broth; 2 cups of water; Salt & Pepper to taste; 1 tbs of Rosemary and Thyme; 2 Bay leaves", instructions: "Cook sausage in skillet; Saute veggies & potato in olive oil in a large pot until soft; Add broth, water and sausage; Bring to a boil and simmer for 30 minutes; After 25 minutes, add kale and beans; Serve with parmesan cheese", description: "Hearty soup great for colds", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459508/9569cd14-c892-4cfe-999a-8ee8ca1d4873--2015-0202_rosemary-kale-white-bean-soup_alpha-smoot-083_pg0omv.jpg"},
#   {title: "Chili", ingredients: "1 Pound of ground turkey; 1 Yellow or sweet onion diced; 3 Cloves of garlic minced; 2 Jalapeno peppers sliced lengthwise and chopped; 1 Can of dark red kidney beans; 1 Can of light red kidney beans; 1 Can of black beans; 1 Can of diced tomatoes; 1 32oz jar of Rao's homemade marinara sauce; 1 cup of low sodium chicken broth; 1 cup of frozen corn; 1 tbs of salt; 1 tbs of black pepper; 1 tbs of smoked paprika; 1 tbs of cumin; 2 tbs of chili powder", instructions: "Brown meat in skillet; Combine all ingredients in crock pot & stir until mixed; Cook for 8-10 hours on low or 4-6 hours on high", description: "Classic comfort food dish", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459544/slow-cooker-chili2-srgb._b9fp6a.jpg"},
#   {title: "Buffalo Chicken Dip", ingredients: "1 8oz pack of cream cheese; 1 12oz bottle of hot wing sauce; 1 cup of ranch dressing; 2 bags of shredded cheddar cheese; 2 chicken breasts blended or pulled; 3 tbs of butter melted", instructions: "Preheat oven to 375; Boil chicken for 8-10 minutes and run through a blender until shredded or cook chicken in a slow cooker for 3 hours on high and shred with 2 forks; Melt butter in a medium sauce pot; Add cream cheese to pot and mix until melted; Add hot sauce and ranch and stir until mixed; add 1.5 bags of cheese and the shredded chicken continuing to stir; Transfer mixture to casserole pan and sprinkle the remaining cheese on top; Bake for about 15 munutes or until the top cheese is melted and the sides are bubbling", description: "Classic spicy tailgating dip", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459571/P123016135459_3_yulv8q.jpg"},
#   {title: "Fire Cider", ingredients: "1/3 cup of horseradish root; 1 bulb of garlic; 1/2 cup of chopped onion; 1/3 cup of grated ginger; 1/3 cup of grated turmeric; 5 diced habeneros; 3-5 tbs of honey; 1 quart of apple cider vineger", instructions: "Dice everything small and store in a jar for 4 weeks; strain through cheesecloth and store in fridge for up to a year; drink 1 tsp every morning or 1 shot every morning during cold season", description: "Herbal tonic good for colds", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459335/Fire-Cider-a-1-600x900_mnhndk.jpg"},
#   {title: "Tomato Sauce", ingredients: "2 28oz cans of San Marzano whole peeled plum tomatoes; 1 tbs of tomato paste; 1 Small sweet or yellow onion diced; 6-8 Cloves of garlic minced; 1/2 Cup of olive oil; 1/8 Cup of dry red wine; 2 tbs of salt; 2 tbs of pepper; 1 tbs of crushed red pepper flakes; 2 tbs of dried basil; 2 tbs of dried parsley; 1 tbs of sugar; 2 Bay leaves", instructions: "Puree tomatoes in a blender or food processor; Heat oil in a large sauce pot; Add onion and garlic and cook until soft but not brown; Add crushed red pepper flakes and tomato paste and cook for 5 minutes stirring; Add red wine and reduce slightly; Add tomatoes and reduce heat to low simmer; Add the rest of the spices and cook for 4 hours", description: "No description neccessary", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459632/MTI1NjQ3NDY1NDMxOTk1NjY2_mhzx1n.jpg"},
#   {title: "Meatballs", ingredients: "1 Pound of ground beef; 1 Pound of ground veal; 1 Pound of ground pork; 4 slices of Italian bread; 1/4 Cup of milk; Juice of half of a lemon; 1 tbs of dried basil; 1 tbs of dried oregano; 1 tbs of dried parsley; 1 tbs of crushed red pepper; 2 eggs; 1 Cup of fresh grated parmesan cheese", instructions: "Preheat oven to 400 degrees; Pour milk and lemon juice into a bowl; Run bread through a blender or food processor and add to milk lemon mix; Combine all ingredients in a large mixing bowl and mix by hand; Form into balls slightly larger than a golf ball; Bake for 20 minutes and add to sauce", description: "Classic Italian style meatballs", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518459692/italian-meatballs-horiz-c-1800_nv7nyu.jpg"},
#   {title: "Ribs", ingredients: "1 or 2 packs of pork back ribs; 1 bottle of BBQ sauce; 1/2 cup of brown sugar; 1/4 cup of paprika; 1 tbs of: salt/pepper/chili powder/garlic powder/onion powder; 1 tsp of ground cayenne pepper", instructions: "Preheat oven to 225 degrees; Combine all dry ingredients in a bowl and mix; Remove ribs from package and pat dry with a paper towel; Flip the ribs over and remove the silver skin using a thin utility or boning knife; Liberally apply dry rub to both sides of the ribs starting with the bottom; place ribs in a piece of aluminum foil double the length of the rack; fold aluminum foil over the top the long way and roll until the top is sealed; roll the ends up creating a pouch; Place rib pouch on a baking sheet and cook at 225 degrees for 3 hours; Remove ribs and set oven to broil on low; Open one end of the pouch and drain the liquid that has accumulated; Once grease is drained open the pouch all the way exposing the entire rack of ribs; lather the ribs in BBQ sauce; Broil on low until you can see a little crisp on top", description: "Tender fall off the bone oven baked ribs", image: "http://res.cloudinary.com/dw2f552xa/image/upload/v1518462598/30741_easy_bbq_baby_back_ribs_3000x2000_lqamll.jpg"}
# ]
#
# recipes.each do |recipe|
#   Recipe.create(recipe)
# end
