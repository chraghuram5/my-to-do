const Card=require('../models/card');
module.exports.home=function(req,res){
    Card.find({},function(err, cards){
        if(err){
            console.log("error in fetching cards");
            return;
        }
        res.render('home',{
            cards: cards
        });
    })
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
        console.log("Added to database");
    });

    return res.redirect('/home');
}

module.exports.markComplete=function(req,res){
    let id=req.query.id;
    let status=req.query.status;
    if(status=="complete"){
        Card.findByIdAndUpdate(id,{status: "incomplete"},function(err){
            if(err){
                console.log("error in marking complete");
                return;
            }
        });
    }
    else{
        Card.findByIdAndUpdate(id,{status: "complete"},function(err){
            if(err){
                console.log("error in marking complete");
                return;
            }
        });
    }

    return res.redirect('/home');
}