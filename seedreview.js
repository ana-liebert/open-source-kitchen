const mongoose = require('mongoose');
require('dotenv').config();

const connectionStr = process.env.MONGO_URI;

mongoose.connect(connectionStr);


const { Review } = require('./models');

Review.deleteMany({}, (error, deletedProduct) => {
    if(error) console.log(error);
    Review.insertMany(
        [
            {
                user: "Alan McGurney",
                title: "This recipe absolutely rocked",
                rating: "5",
                comment: "Made this for my girlfriend yesterday and she loved it. Will become a regular one in rotation.",
            },
        ],
        function (error, createdProduct) {
            if (error) {
                return console.log(error);
            }
            console.log("=== Seed Complete ===");
            console.log(createdProduct);
        }
    )
    console.log(deletedProduct)
}
)