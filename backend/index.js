const express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
const { default: mongoose, Mongoose } = require('mongoose');
dotenv.config();
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.di4bo.mongodb.net/inotebook`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => {
  console.log("Connected to database");
})
.catch((err) => {
  console.error("Error connecting to database:", err);
});
const app = express();
const port = 5000;


app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(cors());
//Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.listen(port, () => {
  console.log(`inotebook backend listening on port ${port}`);
})