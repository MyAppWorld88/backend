const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    libraryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Registeredlibrary"
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
    mobileNo:{
        type:String,
        required:[true,"Please mobilne number is required"],
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