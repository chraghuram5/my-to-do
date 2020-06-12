const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
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
        type: String,
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

const Task=mongoose.model('Task',taskSchema);

module.exports=Task;