const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please add title of the book"],
    },
    author_ids:{
        type:String,
        required:[true,"Please enter author name"],
    },
    category_ids:{
        type:String,
        required:[true,"Please enter category name"],
    },
    isbn:{
        type:String,
        required:[true,"Please enter ISBN Number"],
    },
    publisher_year:{
        type:String,
        required:[true,"Please enter Publisher Year"],
    },
    publisher_name:{
        type:String,
        required:[true,"Please enter publisher Name"]
    },
    copies_available:{
        type:String,
        required:[true,"Please enter ISBN Number"],
    },
    total_copies:{
        type:String,
        required:[true,"Please enter ISBN Number"],
    },
    borrowed:[{
        user_id:{
            type:String,
        },
        borrowed_date:{
            type:String,
        },
        due_date:{
            type:String,
        },
        returned_date:{
            type:String,
        }
    }]
},
{
  timestamps:true,
}
);

module.exports= mongoose.model('Book',bookSchema);