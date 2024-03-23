const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = () => {
  mongoose.connect(process.env.DATABASE_STRING);
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastname: {
      tyep: String,
      required: true,
    },
    role:{
        type:String,
        enum:['student','faculty'],
        default:'student'
    },
    profilePicture:{
        type:String
    }
  },
  {
    versionKey: false,
  }
);

const documentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        tyep:String
    },
    fileUrl:{
        type:String,
        required:true
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    versionKey:false
}
);

const User = mongoose.model("User",userSchema)
const Document = mongoose.model("Document", documentSchema)

module.exports = { connectdb, User, Document };
