// require('../config/db.connection');
// ^ awaiting name for this connection in config file

module.exports = {
    // This is exporting my Product model
    Product: require('./recipe_model'),
    // This is exporting my Review model
    Review: require('./review_model'),
}