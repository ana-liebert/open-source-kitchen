const mongoose = require('mongoose');
const database = require('../models');


mongoose.connect('mongodb://127.0.0.1:27017/cookingblog', () => {
    console.log('Mongo is connected')
}, e => console.error(e)
);

database.Product.deleteMany({}, (error, deletedProduct) => {
    if(error) console.log(error);
    database.Product.insertMany(
        [
            {
                user: "Ana Liebert",
                date: "placeholder",
                title: "Italian Wedding Soup",
                description: "Healthier Italian Wedding Soup with Lemon and Garlic…that cozy bowl of winter soup that’s healthy too. Herby chicken parmesan meatballs, simmered in chicken broth with lots of lemon, garlic, and fresh produce for an easy and delicious winter soup. Each steaming bowl of soup has a bit of pasta and grated parmesan on top. This soup is quick, easy, and SO DELICIOUS. You can make it on the stove or in the crockpot, either way, it’s going to be good. The aroma will fill your home with the cozy smell of soup…that’s just a touch healthier.",
                ingredients: "1 1/4 pound ground turkey or chicken, 1 large egg, 1/2 grated parmesan cheese",
                recipe: "1. To make the meatballs. Add the chicken, egg, parmesan, parsley, oregano, paprika, and a pinch each of salt and pepper to a bowl. Coat your hands with a bit of olive oil and roll the meat into small, 1-inch size meatballs, placing them on a baking sheet as you work. 2. To make the soup. Heat the olive oil in a large pot over medium heat. When the oil shimmers, add the onion and smashed garlic cloves and cook 5 minutes, until golden. Add the carrots, celery, and a pinch each of salt and pepper. Cook another 5 minutes. Add the broth, reserved parmesan rind, and a pinch of red pepper flakes. Stir in the meatballs. Simmer over medium heat for 15-20 minutes, until the meatballs are cooked through. 3. Stir in the spinach and lemon juice, cooking another 5 minutes. Remove the parmesan rind. Taste and season with salt and pepper. 4. Bring a large pot of salted water to a boil. Cook the pasta according to packaged directions, until al dente. Drain.5. Divide the pasta among bowls and pour the soup over top. Top each bowl with extra parmesan, if desired.",
                image: "https://www.halfbakedharvest.com/wp-content/uploads/2020/01/Healthier-Italian-Wedding-Soup-with-Lemon-and-Garlic-13-700x1050.jpg"
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