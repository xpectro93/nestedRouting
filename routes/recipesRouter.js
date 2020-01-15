const  express = require('express');
const router = express.Router();
let recipes = [{
  name: "Grilled Cheese",
  ingredients: [
      "Bread",
      "Cheese",
      "Butter"
  ],
  directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}];

// let recipes = {
//   'Grilled Cheese':{
//     name: "Grilled Cheese",
//     ingredients: [
//         "Bread",
//         "Cheese",
//         "Butter"
//     ],
//     directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
//   }
// }

//localhost:3000/recipes/
router.get('/', (req,res)=> {
  res.json('Recipes are here')
})

//   /add
router.post('/add',(req, res)=> {
  let resp  = req.body
  
  if(req.body.ingredients && req.body.name && req.body.directions){
  req.body.ingredients = req.body.ingredients.split(' ')
  recipes.push(req.body);
    res.status(200).json({
      message:"Success! New recipes added!",
      data: req.body
    })
  }else{
    res.status(400).json({
      message: "Something went wrong :< "
    })
  }
})
//update
router.patch('/update/:name', (req, res)=> {
  //before => req.params.name
  let { name } = req.params;
  //after ^^^^ => name;
  console.log(name)
  //look through arr of obj
  recipes.forEach(recipe => {

    //if name = recipe.name
    if(name == recipe.name){
      recipe = req.body
    }
  })
  res.status(200).json({
    message:'Recipe Updated',
    newRecipe: req.body
  })

  console.log('THIS IS REQ.BODY', req.body)
})

//delete 
router.delete('/:name', (req, res)=> {
  let { name } = req.params;
 recipes = recipes.filter(recipe => recipe.name !== name)
  res.status(200).json({
    message:'Recipe Deleted',
    remainingRecipes: recipes
  })
})




module.exports = router;

// let obj = {
//   directions:'bake',
//   name:'cake',
//   ingredients:'eggs'
// }
// creating req.body in frontend
// axios.post('url',obj)


//backend params
// (localhost:3000/:aVariable)
// req.params.aVariable

// creating req.params in frontend
// (url/anything)
// req.params.aVariable => anything

// creating req.query on frontend
// localhost:300/?name=cake&ingredients=eggs

// u have access on backend by
// req.query.name => cake
// req.query.ingredients => eggs