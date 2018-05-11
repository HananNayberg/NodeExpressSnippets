/* ----- express-generate----------*/

//==========add below require list========
//connect to db: defines what db and collections to use
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/YOUR.db.OR.Collection.name');


//======add below var app = express()========
// Make our selected db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
  });

  //a sample GET request route 
  router.get('/URL.NAME', (req,res)=> {
    var db = req.db; 
    var collection = db.get('DB.Or.Collection.Name');
    collection.find({},{}, (e,docs) => {
      res.json(docs);
    });
    
  });