const mongoose = require('mongoose');
const { type } = require('os');

const adminSignup = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    }
    },{
    timestamps:true
});

const Admin = mongoose.model('Admin',adminSignup);

module.exports = Admin;