const express = require('express');
const { Recipe } = require('../models');
const router = express.Router();
const db = require('../models')


router.get('/home', async (req, res, next) => {
    
    try {
        const recipes = await db.Recipe.find({});
        const reviews = await db.Review.find({});
        const context = { recipes , reviews}
        return res.render('home.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


router.post('/home', async (req, res, next) => {

    try {
        const createdRecipe = await db.Recipe.create(req.body)

        res.redirect("/recipeblog/home");
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



router.get("/allrecipes/new", function(req, res) {
    res.render("post.ejs")
})


router.get('/allrecipes/:category', async (req, res, next) => {
    try {
        const category = req.params.category
        const foundCategory = await db.Recipe.find({category})

        const context = { foundCategory }
        res.render('categories.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


router.get('/:recipeTitle', async (req, res, next) => {
    try {
        const title = req.params.recipeTitle
        const foundRecipe = await db.Recipe.findOne({title}).populate('review')
  
        const reviews = await db.Review.find({})


        const context = { foundRecipe, reviews}

        res.render('recipe.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


router.post('/:recipeTitle', async (req, res, next) => {

    try {
        const review = await db.Review.create( {rating: req.body.rating, user: req.body.user, title: req.body.title, comment: req.body.comment});
        await review.save();

        await Recipe.findOneAndUpdate({ _id: req.body._id}, {$push: {review}});

        title = req.params.recipeTitle
        res.redirect("/recipeblog/" + title);
        
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


router.delete('/:recipeTitle', async (req, res, next) => {
    try {
        const itemToDelete = req.params.recipeTitle
        const deletedRecipe = await db.Recipe.findOneAndDelete({title: itemToDelete});

        res.redirect('/recipeblog/home');
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


router.get('/:recipeTitle/edit', async (req, res, next) => {
    try {
        const title = req.params.recipeTitle
        const foundRecipe = await db.Recipe.findOne({title: title});

        return res.render('edit.ejs', { foundRecipe: foundRecipe })
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})



router.put('/:recipeTitle', async (req, res, next) => {

    try {
        const title = {title: req.params.recipeTitle}



        const updatedRecipe = await db.Recipe.findOneAndUpdate(title, req.body);
        return res.redirect("/recipeblog/home");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


module.exports = router;


