const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook";//paste your connection string here

const connectToMongo = async()=>{
  await mongoose.connect(mongoURI);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
connectToMongo().catch(err => console.log(err));
module.exports = connectToMongo;