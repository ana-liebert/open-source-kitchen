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
                recipe: "61f410d18e20df2d305fe235"
            },
            {
                user: "Ana Liebert",
                title: "Pedesetrian in every way.",
                rating: "3",
                comment: "I'm a soup connaisseur, so I'm hard to impress. It's really no surprise that this regular, degular, run of the mill, average at best take on Italian Wedding Soup made no impact on me. It was unremarkable but not disgusting, which is more than cam be said about your 'mutha's' rendition of this classic. Would not recommend to anyone with a modicum of class, though it's perfectly suitable for the uncultured, unrefined palate.",
                recipe: "61f410d18e20df2d305fe235"
            },
            {
                user: "Najee Simmons",
                title: "Waste of time and ingredients",
                rating: "1",
                comment: "I put the chicken in the dutch oven for 100 minutes like the recipe said, but it ended up getting all burnt. SMH. ",
                recipe: "61f410d18e20df2d305fe237"
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