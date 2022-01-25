require('../config/db.connection');

module.exports = {
    // This is exporting my Product model
    Recipe: require('./recipe_model'),
    // This is exporting my Review model
    Review: require('./review_model'),
}