const mongoose = require('mongoose');
const {Schema} = mongoose;
const ContactSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
const Contact = mongoose.model('contact',ContactSchema);
Contact.createIndexes();
module.exports = Contact;
