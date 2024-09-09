const mongoose = require('mongoose');


const authorSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please name is required"],
    },
    bio:{
        type:String,
        required:[true,"Please bio is required"],
    },
    birth_year:{
        type:String,
        required:[true,"Please birth_year is required"],
    },
    death_year:{
        type:String,
        required:[false,"Please death_year"],
    },

},
{
  timestamps:true,
}
);


exports.module= mongoose.model("Author",authorSchema);