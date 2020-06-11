const mongoose=require('mongoose');

const tasksSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    status:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    },
    dueTime:{
        type: String, 
    },
    label:{
        type: String,
    },
},{
    timestamps:true
});

const Task=mongoose.model('Task',tasksSchema);

module.exports=Task;