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


router.get("/:id", function(req, res) {
    res.render('review.ejs')
})
// ^ this will display review form
//------------------------------------------------------------------
//------------------------------------------------------------------

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const foundReviews = await db.Review.find({ObjectId: id})
        console.log([req.params.id])
        console.log(foundReviews);
        const context = { foundReviews }
        console.log('========================================')
        // console.log(`THIS IS THE CONTEXT OF RECIPE PAGE ${context}`);
        console.log('========================================')
        res.render('review.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

/* ^ this route will catch GET requests to :id
 and respond with all reviews for a single recipe */
//------------------------------------------------------------------
//------------------------------------------------------------------
module.exports = router;