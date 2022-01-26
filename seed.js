const mongoose = require('mongoose');
const { Recipe } = require('./models');


mongoose.connect('mongodb://127.0.0.1:27017/cookingblog', () => {
    console.log('Mongo is connected')
}, e => console.error(e)
);

Recipe.deleteMany({}, (error, deletedProduct) => {
    if(error) console.log(error);
    Recipe.insertMany(
        [
            {
                user: "Ana Liebert",
                title: "Italian Wedding Soup",
                category: "dinner",
                description: "Healthier Italian Wedding Soup.",
                ingredients: [
                    "1 1/4 pound ground turkey or chicken",
                    "1 large egg", 
                    "1/2 grated parmesan cheese",
                    "1/4 cup fresh chopped parsley (or 2 tablespoons dried parsley)",
                    "2 tablespoons chopped fresh oregano (or 2 teaspoons dried oregano)",
                    "1/4 cup extra virgin olive oil",
                    "1 yellow onion, chopped",
                    "8-12 large cloves of garlic, smashed (use to your taste)",
                    "6 carrots, chopped",
                    "4 celery stalks, chopped",
                    "8-10 cups low sodium chicken broth",
                    "1 pinch crushed red pepper flakes",
                    "4-6 cups fresh baby spinach",
                    "juice of 2 lemons (or to taste)",
                    "1-2 cups dry acini de pepe or orzo pasta",
                ],
                recipe: [
                    "1. To make the meatballs. Add the chicken, egg, parmesan, parsley, oregano, paprika, and a pinch each of salt and pepper to a bowl. Coat your hands with a bit of olive oil and roll the meat into small, 1-inch size meatballs, placing them on a baking sheet as you work.",
                    "2. To make the soup. Heat the olive oil in a large pot over medium heat. When the oil shimmers, add the onion and smashed garlic cloves and cook 5 minutes, until golden. Add the carrots, celery, and a pinch each of salt and pepper. Cook another 5 minutes. Add the broth, reserved parmesan rind, and a pinch of red pepper flakes. Stir in the meatballs. Simmer over medium heat for 15-20 minutes, until the meatballs are cooked through.",
                    "3. Stir in the spinach and lemon juice, cooking another 5 minutes. Remove the parmesan rind. Taste and season with salt and pepper.",
                    "4. Bring a large pot of salted water to a boil. Cook the pasta according to packaged directions, until al dente. Drain.5. Divide the pasta among bowls and pour the soup over top. Top each bowl with extra parmesan, if desired",
                ],
                image: "https://www.halfbakedharvest.com/wp-content/uploads/2020/01/Healthier-Italian-Wedding-Soup-with-Lemon-and-Garlic-13-700x1050.jpg"
            },
            {
                user: "Ana Liebert",
                title: "Quick Ragu With Ricotta and Lemon",
                category: "dinner",
                description: "Meat ragù traditionally requires a long simmer over low heat",
                ingredients: [
                    "¼ cup extra-virgin olive oil, plus more for drizzling",
                    "1 medium onion, thinly sliced", 
                    "2 garlic cloves, peeled and smashed",
                    "1 pound ground beef",
                    "2 heaping tablespoons sambal oelek (or any spicy red-pepper paste)",
                    "¼ cup full-bodied red wine, like cabernet or merlot",
                    "1 (28-ounce) can whole peeled tomatoes, with their juices",
                    "8 ounces plain or whole-wheat lasagna noodles (not no-cook), broken in 1- to 2-inch pieces",
                    "1 teaspoon fennel seeds",
                    "1 cup fresh ricotta",
                    "1 lemon, zested",
                    "Flaky salt, like Maldon",
                ],
                recipe: [
                    "1. In a large Dutch oven or pot, heat 1/4 cup oil over medium. Add the onion and garlic, season with salt and cook until just beginning to soften, about 5 minutes. Add the ground beef and cook, breaking it apart with the edge of a spoon, until nicely browned but not completely cooked through, about 6 minutes. Stir in the sambal oelek. Add the wine and stir to release any brown bits from the bottom of the pot.",
                    "2. Add the tomatoes and their juices, crushing completely between your hands or with a potato masher. Cook over medium-low, stirring occasionally, until the tomatoes begin to break down and the beef is cooked through, about 30 minutes. Season with salt and pepper halfway through cooking.",
                    "3. Meanwhile, bring a large pot of generously salted water to a boil. Boil the broken lasagna noodles according to package directions until al dente.",
                    "4. In a small skillet, toast the fennel seeds over medium until fragrant, 2 to 3 minutes. Remove and crush on a cutting board with the flat end of a large knife or the bottom of a skillet.",
                    "5. Drain the pasta, add to the ragù and toss to coat. Divide among four bowls and dollop each generously with ricotta. Sprinkle with lemon zest, cracked fennel, flaky sea salt and pepper. Drizzle with olive oil as desired. Serve warm."
                ],
                image: "https://static01.nyt.com/images/2019/05/14/dining/sc-weeknight-beef-ragu/merlin_154348221_ba4c3b05-1ecb-4420-8967-1ec0c6fea5fe-articleLarge.jpg"
            },
            {
                user: "Ana Liebert",
                title: "One-Pot Chicken with Lemon and Dates",
                category: "dinner",
                description: "This one-pot chicken is a true treasure. It’s saucy, sweet, tangy and a little spicy..",
                ingredients: [
                    "1 3 ½ - 4 lb. chicken or 3 lbs. Bone-in, skin-on chicken thighs",
                    "Kosher salt, freshly ground pepper", 
                    "1 tablespoon canola oil",
                    "1 lemon, cut into thick slices crosswise (about 1/4” thick), seeds removed",
                    "2 shallots, peeled if you want, halved lengthwise (or one red onion, peeled and cut into wedges)",
                    "4–6 medjool dates, pitted",
                    "4 sprigs thyme or oregano, plus more for serving",
                    "1–2  teaspoons crushed red pepper flakes",
                ],
                recipe: [
                    "1. Preheat oven to 425°.",
                    "2. Season chicken with salt and pepper. Heat oil in a large (at least 5.5 qt) dutch oven over medium–high heat. Place chicken, legs side down* and using tongs or your hands (be careful!) press lightly to make sure the skin comes into even contact with the pot. This is your chance to brown the legs! Rarely offered in whole chicken recipes, so take advantage.",
                    "3. Meanwhile, bring a large pot of generously salted water to a boil. Boil the broken lasagna noodles according to package directions until al dente.",
                    "4. Cook, without moving, until chicken is nice and browned, 5– 8 minutes. Seriously, no peeking! Nothing exciting will happen before 5 minutes, I promise you.",
                    "5. Add lemon slices, maneuvering the chicken however you need so that the slices come into contact with the bottom of the pot.",
                    "6. Let the lemons sizzle in the chicken fat until caramelized on one side, about 2 minutes. Add shallots, dates, thyme and 2 cups of water. Sprinkle the top of the chicken with crushed red pepper flakes and place the lid on.",
                    "7. Place dutch oven in the oven and roast until the dates are plump, the lemon is jammy and the chicken is almost but not totally cooked through, 20–25 minutes (it will look mostly cooked through and a little anemic from getting covered with the lid).",
                    "8. Remove the lid and continue to cook until the liquid has reduced by ½ and the top of the chicken has an illustrious golden-brown color, another 20–25 minutes.",
                    "9. Remove from oven and let chicken rest in the dutch oven for 10 minutes before transferring it to a cutting board and carving. Serve alongside shallots, lemons, and dates with some more thyme sprinkled over.",
                ],
                image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631289634147-0TL1AEWE6P2LB3Y45KRR/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_b1045dbc-a8ff-417f-9cd9-215832f04e7f_1600x2000.jpg?format=2500w"
            },
            {
                user: "Ana Liebert",
                title: "Grilled Corn and Scallion Salad",
                category: "lunch",
                description: "Corn nuts! That's it, that's the pitch.",
                ingredients: [
                    "6 ears of yellow corn, husks removed",
                    "1-2 bunches scallions",
                    "2 tablespoons olive oil, plus more ", 
                    "1/2 cup fresh lime juice, pepperoncini liquid, vinegar, or a mix, plus more",
                    "6 pepperoncini peppers, coarsely chopped",
                    "Kosher salt and freshly ground black pepper",
                    "1 cup cilantro, tender leaves and stems",
                    "4 ounces queso fresco, haloumi, or other firm, mild, salty fresh cheese like feta, crumbled or coarsely chopped",
                    "½ cup corn nuts (or roasted pumpkin seeds, sunflower seeds or almonds), coarsely chopped",
                ],
                recipe: [
                    "1. Heat a grill to high. Drizzle 2 tablespoons olive oil over the corn and scallions and season with salt. Throw the corn right on the grill and leave it alone, except to turn it a few times over the next 10 to 15 minutes. It should be charred and blackened on the outside while it gets tender and cooked through on the inside. Throw the scallions on the grill, too, and cook until the tops are softened and charred and crispy in spots, and the bulbs are a little golden but remain crispy.",
                    "2. Once the corn comes off the grill, let it get cool enough to handle so you can strip the kernels off the cob. The easiest way to do this is to hold the corn by the stem and place it in a large bowl. Starting at the top, using a sharp knife (a serrated knife works well, too) and getting as close to the cob as possible, shave the kernels off; they should land in the bowl, rather than scatter all over your counter and kitchen floor.",
                    "3. Coarsely chop the scallions and add to the bowl with the corn kernels, seasoning with salt, pepper, and 2 tablespoons olive oil. Add the cilantro and pepperoncinis, and season with the pepperoncini liquid and lime juice. Add the corn nuts and queso fresco, and season with salt, pepper, and more lime juice as needed to make sure it’s almost *too* limey.",
                ],
                image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1633627946606-M4FZ5IIK873XAPWYTJFT/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_ce8b400a-6b11-4e6e-bbe2-d33a3ef2e9c3-1.jpg?format=2500w"
            },
            {
                user: "Ana Liebert",
                title: "Creamy Potato Leek Soup with Dill",
                category: "dinner",
                description: "Whatever you do, don’t skip the dill. Nothing can replace the dill.",
                ingredients: [
                    "2 tablespoons olive oil or unsalted butter",
                    "2 pounds waxy potatoes, such as Yukon Gold or fingerlings, sliced about ½” thick",
                    "2 leeks (the whole thing!), chopped and rinsed", 
                    "Kosher salt and freshly ground black pepper",
                    "6 cups vegetable broth (or 6 cups water + 4 teaspoons vegetable Better Than Bouillon)",
                    "1 large (or 2 small) bunch leafy greens, such as kale, spinach, or Swiss chard, stems removed, leaves torn into bite-sized pieces",
                    "1/4 cup sour cream, plus more for serving ",
                    "1 teaspoon white wine vinegar",
                    "4 scallions, thinly sliced",
                    "1 cup dill, coarsely chopped",
                ],
                recipe: [
                    "1. Heat olive oil in a large, heavy-bottomed pot over medium-high heat. Add potatoes and leeks and season with salt and pepper.",
                    "2. Cook, stirring occasionally until the leeks are bright green and have begun to sweat, 5 to 8 minutes.  Add water and bouillon (or vegetable broth) and bring to a simmer. Simmer until the liquid has reduced a bit and the potatoes are basically falling apart, 30–40 minutes. With a little encouragement from your wooden (or whatever) spoon, I want you to smush the tender potatoes so that they fall apart even more (this will thicken the soup, turn it creamy and make the potatoes a nice, uneven, chunky texture).",
                    "3. Add the greens, stirring to wilt them into the soup.",
                    "4. Add the sour cream and vinegar and simmer another minute or so (adding the sour cream later in the cooking process keeps a “fresher” sour cream flavor and prevents any curdling). Season with salt, pepper, and maybe a little more vinegar.",
                    "5. Ladle soup into a bowl and top with more sour cream if you’re going that route. Scatter the bowl with scallion and #lotsofdill, then grind some more black pepper over the whole thing."
                ],
                image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631288243025-33ARHBC12R3YVB533IHA/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_033fcd64-cfee-4761-a007-4784f2d23a12_3024x4032.jpg?format=2500w"
            },
            {
                user: "Ana Liebert",
                title: "Chicken and Escarole Salad With Anchovy",
                category: "lunch",
                description: "Think of this salad as an umami-charged version of a classic Caesar.",
                ingredients: [
                    "1 ¼ pounds bone-in, skin-on chicken breasts or thighs",
                    "Kosher salt and black pepper",
                    "6 tablespoons olive oil, plus more as needed",
                    "4 anchovy fillets, plus more if you like", 
                    "¼ loaf of crusty bread, torn into 1-inch pieces (about 2 cups)",
                    "1 garlic clove, finely grated",
                    "¼ cup fresh lemon juice, plus more as needed",
                    "1 tablespoon soy sauce",
                    "1 large head escarole or 2 heads romaine lettuce, torn into large pieces",
                    "1 cup parsley, tender leaves and stems",
                    "Pecorino or Parmesan, for shaving",
                    "4 large egg yolks (optional)",
                ],
                recipe: [
                    "1. Heat oven to 375 degrees. Season chicken with salt and pepper. Heat 1 tablespoon olive oil in a large skillet (preferably cast-iron) over medium-high heat.",
                    "2. Add chicken, skin-side down, and cook without moving until the pieces are golden brown and crispy, 5 to 8 minutes. Flip the chicken and continue to cook until well browned on the other side, another 5 to 8 minutes.",
                    "3. Move the chicken to one side of the skillet and tilt the skillet a little so that the fat and drippings pool on one side. Add the anchovies and let them sizzle a bit to melt down. Add the croutons, along with 2 tablespoons olive oil. Season with salt and pepper and toss them to coat in the anchovy-chicken fat.",
                    "4. Meanwhile, whisk the grated garlic, lemon juice and soy sauce in a small bowl and season with salt and pepper.",
                    "5. Place escarole and parsley in a large bowl or on a platter and dress with lemon-garlic mixture. Season with salt, pepper and more lemon juice if you like. Drizzle with remaining 2 tablespoons olive oil and shave some pecorino over the whole thing.",
                    "6. Remove the chicken from the oven and let it rest a minute or two. Cut the meat off the bone and thinly slice. Place on top of the salad, along with the croutons. Top each serving with an egg yolk, if using, and more anchovies, if you like.",
                ],
                image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1611365836288-TOCH9YS0LEZ5MYFTE59K/alison-roman-cooking-chicken-and-escarole-salad-anchovy-croutons.jpg?format=2500w"
            },
            {
                user: "Ana Liebert",
                title: "Spring Tofu Soup",
                category: "lunch",
                description: "This versatile soup can be customized with most quick-cooking vegetables",
                ingredients: [
                    "3 garlic cloves, finely grated or chopped",
                    "1 jalapeño, finely grated or chopped",
                    "2 lemons",
                    "Kosher salt and freshly ground black pepper",
                    "4 cups vegetable or chicken broth",
                    "¼ cup soy sauce",
                    "10 ounces mushrooms, such as enoki, white button, cremini or oyster",
                    "1 bunch asparagus, ends trimmed, thinly sliced",
                    "1 ½ cups peas (fresh or frozen)",
                    "1 (12- to 14-ounce) package soft tofu, drained, or use firm tofu, cut in bite-size pieces",
                    "Olive oil, for drizzling",
                    "4 scallions, very thinly sliced, for serving",
                ],
                recipe: [
                    "1. Combine garlic and jalapeño in a small bowl. Finely zest the lemons, and add zest to the bowl with the jalapeño mixture. (Reserve the lemons for juicing.) Season heavily with salt and pepper. Set aside.",
                    "2. In a large pot, bring broth and soy sauce to a simmer, and season with salt and pepper.",
                    "3. Add mushrooms and simmer until they’re just tender, 3 to 5 minutes. Add asparagus, peas and half the jalapeño mixture, and season the broth again with salt and pepper. Cook vegetables until they’re bright green and starting to float, 2 to 4 minutes.",
                    "4. To serve, spoon a large piece of tofu into each bowl. (Alternatively, scoop tofu into the pot, breaking it into large pieces.) Top with more of the jalapeño mixture, and ladle the broth and vegetables over.",
                    "5. Drizzle with olive oil and scatter with scallions before serving.",
                ],
                image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1634744516462-7UY5WKLX5XO9XTU2FWPC/TOFU+SOUP_0237.jpg?format=2500w"
            },
            {
                user: "Ana Liebert",
                title: "Perfect, Crispy Pancakes",
                category: "breakfast",
                description: "A perfect pancake should be almost more savory than sweet, with crispiness that rivals a waffle.",
                ingredients: [
                    "2 cups all-purpose flour",
                    "3 tablespoons sugar",
                    "1 ½ teaspoons baking powder",
                    "1 ½ teaspoons baking soda",
                    "1 ¼ teaspoons kosher salt",
                    "2 ½ cups buttermilk",
                    "2 large eggs",
                    "3 tablespoons unsalted butter, melted",
                    "Coconut oil for the pan (vegetable or canola oil can be used as well)",
                ],
                recipe: [
                    "1. Whisk flour, sugar, baking powder, baking soda, and kosher salt together in a bowl.",
                    "2. In a medium bowl (or the measuring cup you measured your buttermilk in), whisk the eggs into buttermilk. Gently whisk this mixture into your dry ingredients— it’s okay if more than a few lumps remain. Add the melted butter and (still) gently, whisk everything together, moving towards the outside of the bowl, until all ingredients are incorporated. Do not overbeat (a few lumps are fine, trust!).",
                    "3. Heat a large nonstick griddle or skillet, preferably cast-iron, over medium heat for a few minutes, until the skillet is visibly hot. Add 1-2 tablespoons oil to the skillet and turn heat down to medium-low. Using a measuring cup, ladle 1/4-1/3 cup batter into the skillet (depending on how large you like your pancakes).",
                    "4. Once you notice a few bubbles begin rising on the surface and the bottoms are nicely browned (this will take about 2 to 4 minutes), flip them. Cook until the other sides are lightly browned, another 2 minutes or so. If you’re making a bunch at a time, you can move pancakes as they’re ready to a wire rack set inside a rimmed baking sheet, and keep in a 325° oven until all the batter is cooked and you’re ready to serve.",
                ],
                image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631295440292-AS1MLPY4MNHDFL2F97CJ/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws-1.jpg?format=2500w"
            },
            {
                user: "Ana Liebert",
                title: "Charred Kale Frittata",
                category: "breakfast",
                description: "This recipe is true to what I made given my restrictions (I was camping–did you hear?)",
                ingredients: [
                    "2 tablespoons olive oil, plus more for drizzling",
                    "1/2 medium onion, thinly sliced or chopped",
                    "Kosher salt",
                    "1 large bunch kale, preferably Lacinato/Tuscan kale",
                    "Crushed red pepper flakes",
                    "8–10 large eggs, whisked to blend",
                ],
                recipe: [
                    "1. Strip the leaves from the stems of the kale. Thinly slice the stems and tear the leaves into bite-sized pieces.",
                    "2. Heat 2 tablespoons olive oil in a large skillet (9”–10”, preferably cast iron) over high heat. Add onion and season with salt. Stirring fairly regularly, cook the onions till they’re tender and cooked through but still have some texture (an al-dente onion, if you will), with some good color/charring/frizzling at the edges, 4–6 minutes.",
                    "3. With the heat as high as it can go, add the kale (stems and leaves) and season with salt and pepper. I like to use tongs, but using whatever you have, toss the kale in the skillet among the onions and olive oil. Without touching, let the kale cook at the bottom of the skillet –we are actively looking to almost burn the first layer of leaves here (aka char), so resist the urge to toss (this is where you tell yourself to relax!).",
                    "4. Okay, now you can toss the leaves again, just to let the leaves on top get some of that same char (this will also encourage wilting).",
                    "5. Season your eggs with salt. Once the kale is wilted, bright green with bits of almost crispy char, add a pinch of crushed red pepper flakes to the kale, toss once or twice. Add another drizzle of olive oil around the edge of the skillet and add your eggs, letting them fry slightly around the edges for 30 seconds or so.",
                    "6. Using a spatula, give everything a stir to encourage the uncooked egg on top to cook/fry at the bottom for about 20–30 seconds. Do this once more, then reduce the heat to medium-high.",
                    "7. Let the eggs officially fry/brown/sizzle on the bottom and at the edges until the egg is puffed and deeply golden brown at the edges and the bottom of the skillet— it will smell like fried eggs in the best way. The top will not quite be set, so here you have two options:",
                    "8. Either pop the whole skillet into a 450° oven (or under a broiler) for a minute or so to set the last of the eggs, OR, place a large plate on top of the frittata, flip the entire thing, and flip it back into the skillet to briefly cook the top for 30–60 seconds (this is what I did, but either method would work). I found the skillet option to be not that tricky (not trickier than flipping an upside-down cake) and it gets you some nicely browned egg flavor on the top (plus, it looks cool, like a golden brown omelet).",
                    "9. If you wanted to add cheese, add it with the eggs (I would go for Parm or white cheddar), and if you wanted to add herbs, I’d leave them out of the frittata but toss them with lemon juice and scatter them over at the end, like a salad. Sprinkle the frittata with flaky sea salt before slicing/serving/wrapping it in tin foil to take with you on a travel adventure.",
                ],
                image: "https://images.squarespace-cdn.com/content/v1/541b1515e4b0a990b33a796e/1631296153629-GIO5MZJSC3Q0KLIA7VAJ/https___bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com_public_images_1dde32d2-7b9c-4480-9bce-b98aa1ed34ba_3024x4032.jpg?format=2500w"
            },
            {   user: "Ana Liebert",
                title: "Peaches and Cream Overnight Oats",
                category: "breakfast",
                description: "If you love peaches, these overnight oats are an absolute must-try!",
                ingredients: [
                    "3/4 cup plain unsweetened dairy-free milk (almond, cashew, or boxed coconut)",
                    "1/2 tsp vanilla extract",
                    "1 Tbsp almond or cashew butter",
                    "1-1 ½ Tbsp maple syrup",
                    "1 Tbsp chia seeds",
                    "1/2 cup rolled oats (gluten-free certified as needed)",
                    "1/4 cup diced peaches (ripe and juicy // thaw if frozen)",
                    "2 Tbsp coconut yogurt ",
                ],
                recipe: [
                    "1. To a jar (wide-mouth is best) or small bowl with a lid, add dairy-free milk, vanilla, nut butter, maple syrup, salt, and chia seeds. Stir to combine. Leaving some bigger blobs of nut butter will add a nice textural component.",
                    "2. Add oats and diced peaches. Stir well, slightly mashing the peaches. Dollop the coconut yogurt on top and swirl into the oats. Leave some big clumps — again, they’re delicious the next day! Secure with a lid and place in the fridge for at least 6 hours or overnight.",
                    "3. The next day, add your preferred toppings (we like more peaches, granola, chopped almonds, coconut sugar, and/or freeze-dried peaches). Enjoy!",
                    "4. OPTIONAL: If you prefer warm oats, you can heat your oats in the microwave for 45-60 seconds (just ensure there's enough room at the top of your jar to allow for expansion and prevent overflow, and that it’s a microwave-safe container), or transfer oats to a saucepan and heat over medium heat until warmed through. Add more liquid as needed if oats get too thick/dry.",
                    "5. Overnight oats will keep in the refrigerator for 2-3 days, though best within the first 12-24 hours. Not freezer friendly."
                ],
                image: "https://minimalistbaker.com/wp-content/uploads/2021/06/DREAMY-Peaches-n-Cream-Overnight-Oats-Creamy-sweet-and-SO-easy-to-make-Perfect-for-breakfast-or-a-snack.-minimalistbaker-recipe-plantbased-glutenfree-oats-peaches-5.jpg"
            },
        ],
        function (error, createdProduct) {
            if (error) {
                return console.log(error);
            }
            console.log("=== Seed Complete ===");
            console.log(createdProduct);
        }
    )
    console.log(deletedProduct)
}
)