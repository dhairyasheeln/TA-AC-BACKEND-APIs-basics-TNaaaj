var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var bookSchema=new Schema({
    title:{type:String},
    description:{type:String},
    price:{type:String},
    author:{type:String},
    // comments:{type:Schema.Types.ObjectId}
},{timestamps:true});

var Book=mongoose.model('Book',bookSchema);
module.exports=Book;