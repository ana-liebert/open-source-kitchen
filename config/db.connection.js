const mongoose = require('mongoose');
require('dotenv').config();

const connectionStr = process.env.MONGO_URI;

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log('Mongo is connected');
})

mongoose.connection.on('error', (error) => {
    console.log('Mongo connection error');
})

// mongoose.connect('mongodb://127.0.0.1:27017/cookingblog', () => {
//     console.log('Mongo is connected')
// }, e => console.error(e)
// );

// mongoose.connect('mongodb+srv://analiebert:Sep302059@sei.0kgpz.mongodb.net/cookingblog?retryWrites=true&w=majority', () => {
//     console.log('Mongo is connected')
// }, e => console.error(e)
// );



// const {MongoClient} = require('mongodb');

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://analiebert:Sep302059@sei.0kgpz.mongodb.net/recipeblog?retryWrites=true&w=majority";
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);