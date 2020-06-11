const Task = require('../models/task');
module.exports.home=function(req,res){
    Task.find({},function(err, tasks){
        if(err){
            console.log("error in fetching tasks");
            return;
        }
        res.render('home',{
            tasks: tasks
        });
    })
}

module.exports.createTask=function(req,res){
    let task={};
    task.title=req.body.title;
    task.dueDate=req.body.dueDate;
    task.label=req.body.label;
    task.status="incomplete";
    Task.create(task,function(err,newTask){
        if(err){
            console.log("Error creating task in Database");
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
        Task.findByIdAndUpdate(id,{status: "incomplete"},function(err){
            if(err){
                console.log("error in marking complete");
                return;
            }
        });
    }
    else{
        Task.findByIdAndUpdate(id,{status: "complete"},function(err){
            if(err){
                console.log("error in marking complete");
                return;
            }
        });
    }

    return res.redirect('/home');
}