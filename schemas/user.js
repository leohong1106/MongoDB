// const mongoose = require('mongoose');
// const { Schema } = new Schema({
//     name: {
//         type:String,
//         required:true,
//         unique: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     married: {
//         type: Boolean
//     },
//     comment: {
//         type: String
//     },
//     creratedAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('user', userSchema);



const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   userid : {
       type : String,
       required : true,
       unique : true
   },
   password : String,
   salt : String,
   name : String,
   email : String
});

module.exports = mongoose.model('User', userSchema);
