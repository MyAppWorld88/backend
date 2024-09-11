const mongoose = require('mongoose');


const RegisterlibrarySchema = mongoose.Schema({
    libraryName:{
        type:String,
        required:[true,"Please LibraryName is required"],
    },
    libraryCode:{
        type:String,
        required:[true,"Please libraryCode is required"],
    },
    address:{
        type:String,
        required:[true,"Please address is required"],
    },

},
{
  timestamps:true,
}
);


module.exports= mongoose.model("Registeredlibrary",RegisterlibrarySchema);