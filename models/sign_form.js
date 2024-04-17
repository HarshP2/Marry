const mongoose = require('mongoose');
const { type } = require('os');

const userSignup = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    brideName:{
        type: String,
        required:true
    },
    groomName:{
        type: String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    state:{      
    type: String,
    enum: ['Maharashtra', 'Goa', 'Delhi'], // Predefined options
    required: true,
    },
    pin:{
        type:String,
        required : true,
        minlength:6,
        maxlength:6,
    },
    venue:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
    ,story:{
        type: String,
        required: true,
        trim: true, // Remove leading/trailing spaces
    },
    event1:{
        type:String,
        required:true
    },
    event2:{
        type:String,
        required:true
    },
    event3:{
        type:String,
        required:true
    }
    

},{
    timestamps:true
});

const User = mongoose.model('User',userSignup);

module.exports = User;