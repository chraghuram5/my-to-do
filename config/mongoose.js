const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/my-to-do-dev');

const db=mongoose.connection;

db.on('error', console.log.bind(console, "Error connecting to Database"));

db.once('open', function(){
    console.log("Connected to DataBase");
});

module.exports=db;