const express = require('express');
const router = express.Router();
const db = require('../models')

router.post('/home', async (req, res, next) => {

    try {
        const createdReview = await db.Review.create(req.body)
        console.log(createdReview);

        res.redirect("/recipeblog/home");
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
})
// ^ this defines method for creating and posing new recipes


router.get("/allrecipes/new", function(req, res) {
    res.render("post.ejs")
})
// ^ post.ejs needs to be replaced with route to review form
// ^ this route will catch GET requests to /recipeblog/allrecipes/new
// ^ will route to post.ejs new form
//------------------------------------------------------------------
//------------------------------------------------------------------

router.get('/:id/reviews', async (req, res, next) => {
    try {
        const id = req.params.id
        const foundReviews = await db.Review.find({ObjectId: id})
        console.log([req.params.id])
        console.log(foundReviews);
        const context = { foundReviews }
        console.log('========================================')
        // console.log(`THIS IS THE CONTEXT OF RECIPE PAGE ${context}`);
        console.log('========================================')
        res.render('recipe.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

/* ^ this route will catch GET requests to /recipeblog/:recipeTitle/reviews
 and respond with all reviews for a single recipe */
//------------------------------------------------------------------
//------------------------------------------------------------------
