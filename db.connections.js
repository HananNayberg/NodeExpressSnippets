/* ----- express-generate----------*/

//==========add below require list========
//connect to db: defines what db and collections to use
const mongo = require('mongodb');
const monk = require('monk');
const db = monk('localhost:27017/YOUR.db.OR.Collection.name');


//======add below var app = express()========
// Make our selected db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
  });

  //a sample GET request route 
  router.get('/URL.NAME', (req,res)=> {
    const db = req.db; 
    const collection = db.get('DB.Or.Collection.Name');
    collection.find({},{}, (e,docs) => {
      res.json(docs);
    });
    
  });