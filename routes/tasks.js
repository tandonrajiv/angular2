var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://demouser:demouser@ds135912.mlab.com:35912/cvexample',['tasks'])

/*Get all users*/
/*Get Single user*/
/*Book Location Post*/
router.get('/tasks',function(req,res,next){
   db.tasks.find(function(err,tasks){
        if(err){
        	res.send(err);
        }
        res.json(tasks);
   })
});

router.get('/tasks/:id',function(req,res,next){
   db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,tasks){
        if(err){
        	res.send(err);
        }
        res.json(tasks);
   })
});
module.exports = router;