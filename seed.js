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
                image: "https://static01.nyt.com/images/2019/05/14/dining/sc-weeknight-beef-ragu/merlin_154348221_ba4c3b05-1ecb-4420-8967-1ec0c6fea5fe-articleLarge.jpg"
            }
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