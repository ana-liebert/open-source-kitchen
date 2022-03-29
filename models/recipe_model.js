const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true]
    },
    date: {
        type: Date,
        default: Date.now,
        // required: [true],
    },
    title: {
        type: String,
        required: [true],
    },
    category: {
        type: String,
        required: [true],
        enum: ['breakfast', 'lunch', 'dinner'],
        // enum makes it so that only provided answers will be accepted
    },
    description: {
        type: String,
    },
    ingredients: {
        type: [String],
        required: [true]
        // do I want to make this an array ot list of some sort?
    },
    recipe: {
        type: [String],
        required: [true]
    },
    image: {
        type: String,
        required: [true],
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }]
});

/*
Breakdown of relationship funciton--
Added recipe to review and review to recipe schema --- is that right???? In recipe, review is an array to allow for several
In my recipe controller (probably ideally should have been in the review controller),
ADD THE POST ROUTE
route to where you want the review posted (/:recipetitle)
declare a review and use .create method on it. within ( { }) denote which properties and what to take from the request body -- {rating: req.body.rating}
The review needs to be saved (.save) to the specific recipe-- find it and push the review into it with findOneAndUpdate
pass the filter through first, filtering by id and pushing the review obejct  {_id: req.body._id, {$push: {review}}}
Then redirect the page. Here I wanted it to go to the same page, so was able to save the req params as a variable, and do the "URL path" + reqparamvar
ADD ALL THE POST DETAILS TO EJS
Added a form, with POST method routed to the recipe page (action='recipleblog/recivpetitle)
Line up each form input to align to the review schema, and make sure to name="xyz" for each property of the schema
IMPORTANT - include a hidden input that contains the recipe ID - this is how you link the review to the right recipe, aligned to the name in the schema that establishes recipe relationship
Now, update the get link for the recipe page route to include the reviews
where youve declared the indicidual recioe, add .populate('review') to the end of it-- otherwise the reviews just stay IDs 
Then declare reviews with .find{} to show them all , and pass that through the ejs as context 
*/

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;