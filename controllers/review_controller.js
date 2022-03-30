const express = require('express');
const router = express.Router();
const db = require('../models')



// router.get('/:recipeTitle', async (req, res, next) => {
//     try {
//         const title = req.params.recipeTitle
//         const foundRecipe = await db.Recipe.findOne({title})
//         console.log([req.params.recipeTitle])
//         console.log(foundRecipe);
//         const reviews = await db.Review.find({})
//         const context = { foundRecipe, reviews }
//         console.log('========================================')
//         // console.log(`THIS IS THE CONTEXT OF RECIPE PAGE ${context}`);
//         console.log('========================================')
//         res.render('review.ejs', context)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// router.post('/recipeblog/:recipeTitle', async (req, res, next) => {

//     try {
//         const newReview = await db.Review.create(req.body)
//         console.log(newReview);

//         res.redirect('/recipeblog/');
//     } catch(error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })


// router.get('/:recipeTitle', async (req, res, next) => {
// router.post('/recipeblog/:recipeTitle', async (req, res, next) => {

//     try {
//         //we need to find the recipe page by the req params
//         //then, we need to pass the req.body into a variable
//         //we also need to redirect to the recipe page with the req params
//         //we'll need our recipe page to loop through all the reviews that match the req params -- we can filter the find by with id
//         // const title = req.params.recipeTitle
//         // console.log('=================================')
//         // console.long(title);
//         // console.log('=================================')
//         // const foundRecipe = await db.Recipe.findOne({title: title});
//         // console.log('=================================')
//         // console.log(foundRecipe)
//         // console.log('=================================')
//         // const createdReview = await db.Review.create(req.body)
//         // console.log(createdReview);

//         res.redirect("/recipeblog/foundRecipe");
//     } catch(error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })
// // ^ this defines method for creating and posing new recipes


// router.get("/:id", function(req, res) {
//     const title = req.params.id
//     console.log('=================================')
//     console.log(title);
//     console.log('=================================')
//     const foundRecipe = db.Recipe.findOne({title});
//     console.log('=================================')
//     console.log(foundRecipe)
//     console.log('=================================')

//     res.render('review.ejs')
// })

// ^ this will display review form
//------------------------------------------------------------------
//------------------------------------------------------------------

// router.get('/:id', async (req, res, next) => {
//     try {
//         const id = req.params.id
//         const foundReviews = await db.Review.find({ObjectId: id})
//         console.log([req.params.id])
//         console.log(foundReviews);
//         const context = { foundReviews }
//         console.log('========================================')
//         // console.log(`THIS IS THE CONTEXT OF RECIPE PAGE ${context}`);
//         console.log('========================================')
//         res.render('review.ejs', context)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

/* ^ this route will catch GET requests to :id
 and respond with all reviews for a single recipe */
//------------------------------------------------------------------
//------------------------------------------------------------------
module.exports = router;