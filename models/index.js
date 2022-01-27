require('../config/db.connection');

module.exports = {
    // This is exporting my Product model
    Recipe: require('./recipe_model'),
    // This is exporting my Review model
    Review: require('./review_model'),
}


mongoose.connect( process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cookingblog" );