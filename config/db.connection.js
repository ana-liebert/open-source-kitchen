const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cookingblog', () => {
    console.log('Mongo is connected')
}, e => console.error(e)
);