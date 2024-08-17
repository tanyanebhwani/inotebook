const mongoose = require('mongoose');
const {Schema} = mongoose;
const FaqSchema = new Schema({

    email:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    }
});
const Faq = mongoose.model('faq',FaqSchema);
Faq.createIndexes();
module.exports = Faq;
