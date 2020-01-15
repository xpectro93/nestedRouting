const express = require('express');
const port = 3000;
const cors = require('cors');
const recipesRouter = require('./routes/recipesRouter.js')

const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', (req, res) => {
  res.json('Welcome to Food');
})
// 
app.use('/recipes', recipesRouter)


app.listen(port, ()=> {
  console.log(`Listening to food recipes at ` + port);
})