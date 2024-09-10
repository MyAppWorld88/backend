const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    libraryId:{
        type:String,
        required:[true],
    },
    username:{
        type:String,
        required:[true,"Please add the user name"],
    },
    email:{
        type:String,
        required:[true,"Please add the user email address"],
        unique:[true,"Email address already taken"],
    },
    password:{
        type:String,
        required:[true,"Please add the user password"],
    },
    roleId:{
        type:Number,
        required:[true,"Please select role"],
    }
},
{
  timestamps:true,
}
);

module.exports= mongoose.model("User",userSchema);