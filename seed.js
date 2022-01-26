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
                ingredients: "1 1/4 pound ground turkey or chicken, 1 large egg, 1/2 grated parmesan cheese",
                recipe: "1. To make the meatballs. Add the chicken, egg, parmesan",
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