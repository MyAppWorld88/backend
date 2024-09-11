const mongoose = require('mongoose');


const librarySchema = mongoose.Schema({
    libraryName:{
        type:String,
        required:[true,"Please name is required"],
    },
    libraryCode:{
        type:String,
        required:[true,"Please bio is required"],
    },
    email:{
        type:String,
        required:[true,"Please birth_year is required"],
    },
    mobileNo:{
        type:String,
        required:[false,"Please death_year"],
    },
    address:{
        type:String,
        required:[false,"Please death_year"],
    },

},
{
  timestamps:true,
}
);


exports.module= mongoose.model("Author",authorSchema);