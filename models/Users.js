const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/msDhoni');

const sevenSchema = new mongoose.Schema({
    email:String,
    password:String
});

const User = new mongoose.model("User" , sevenSchema);

module.exports = User;