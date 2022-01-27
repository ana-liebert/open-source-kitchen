const express = require('express');
const router = express.Router();
const db = require('../models')

// const db = require('../seed.js')
// const { Recipe } = require('../seed.js');

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

// ^ this route will catch GET requests tor recipeblog/home -- listing all recipes (index page)
// ---------------------------------------------------------------
//------------------------------------------------------------------
router.post('/', async (req, res, next) => {

    try {
        const createdRecipe = await db.Recipe.create(req.body)
        console.log(createdRecipe);

        res.redirect("/recipeblog");
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
// ^ this defines route for creating and posing new recipes

router.get("/allrecipes/new", function(req, res) {
    res.send("Hiya")
})

// ^ this route will catch GET requests to /recipeblog/allrecipes/new
// ^ will route to post.ejs
//------------------------------------------------------------------
//------------------------------------------------------------------

router.get('/allrecipes/:category', async (req, res, next) => {
    try {
        const category = req.params.category
        const foundCategory = await db.Recipe.find({category})

        console.log(foundCategory);
        const context = { foundCategory }
        res.render('categories.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// ^ this route will catch GET requests to /recipeblog/allrecipes/:category/ and respond with all recipes in that category
//------------------------------------------------------------------
//------------------------------------------------------------------

router.get('/:recipeTitle', async (req, res, next) => {
    try {
        const title = req.params.recipeTitle
        const foundRecipe = await db.Recipe.findOne({title})
        console.log([req.params.recipeTitle])
        console.log(foundRecipe);
        const context = { foundRecipe }
        console.log('========================================')
        console.log(context);
        console.log('========================================')
        res.render('recipe.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// ^ this route will catch GET requests to /recipeblog/:recipeTitle/ and respond with a single recipe
//------------------------------------------------------------------
//------------------------------------------------------------------


// this will display form for new recipe entry
//------------------------------------------------------------------

//-----------------------------------------------------------------

//------------------------------------------------------------------



//------------------------------------------------------------------
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
//------------------------------------------------------------------

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
