const mongoose=require('mongoose');

const cardSchema=new mongoose.Schema({
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
        required: true
    },
},{
    timestamps:true
});

const Card=mongoose.model('Card',cardSchema);

module.exports=Card;