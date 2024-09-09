const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please,category name is required"],
    },
    description:{
        type:String,
        required:[true,"Please, description is required."],
    },

},
{
  timestamps:true,
}
);

module.exports= mongoose.model('Categories',categoriesSchema);