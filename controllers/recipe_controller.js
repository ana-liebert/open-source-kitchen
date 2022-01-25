const express = require('express');
const router = express.Router();
const db = require('../models')


router.get('/home', async (req, res, next) => {
    
    try {
        const recipes = await db.Recipe.find({});
        const context = { recipes }
        return res.render('home.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});
// ^ this defines route to home page listing all recipes

// router.post('/', async (req, res, next) => {

//     try {
//         const createdRecipe = await db.Recipe.create(req.body)
//         console.log(createdRecipe);

//         res.redirect("/");
//     } catch(error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })
// ^ this defines route for creating and posing new recipes

// router.get("/new", function(req, res) {
//     res.render("post.ejs")
// })
// this will display form for new recipe entry


// router.get('/:recipeId', async (req, res, next) => {
//     try {
//         const foundRecipe = await db.Recipe.findById(req.params.recipeId)

//         console.log(foundRecipe);
//         const context = { recipe: foundRecipe }
//         res.render('show.ejs', context)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });
// this route will catch GET requests to /recipes/index/ and respond with a single recipe


// router.put('/:recipeId', async (req, res, next) => {

//     try {
//         const updatedRecipe = await db.Recipe.findByIdAndUpdate(req.params.recipeId, req.body);

//         console.log(updatedProduct);
//         return res.redirect('/products');
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

module.exports = router;

/*
/home
homes.ejs
/recipe/id
recipe.ejs
post
post.ejs
category/breakdast || lunch || dinner
category.ejs
*/
