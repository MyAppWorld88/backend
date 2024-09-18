const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please,category name is required"],
        unique: true
    },
    description:{
        type:String,
        required:[true,"Please, description is required."],
    },
    libraryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Registeredlibrary"
    },
},
{
  timestamps:true,
}
);

module.exports= mongoose.model('Categories',categoriesSchema);