const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
connectToMongo()
  .then(() => {
    console.log("Connected to database")});
const app = express()
const port = 5000


app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
app.use(cors());
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`inotebook backend listening on port ${port}`)
})