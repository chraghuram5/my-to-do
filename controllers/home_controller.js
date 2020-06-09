const Card=require('../models/card');
module.exports.home=function(req,res){
    return res.render('home');
}

module.exports.createTask=function(req,res){
    let cardObject={};
    cardObject.title=req.body.title;
    cardObject.dueDate=req.body.dueDate;
    cardObject.label=req.body.label;
    cardObject.status="incomplete";
    Card.create(cardObject,function(err,newCard){
        if(err){
            console.log("Error creating card in Database");
            return;
        }
    })
}