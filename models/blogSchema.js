// import mongoose from "mongoose";
// import User from "./User";

// const reqString = {
//     type: String, 
//     required: true
// }
// const BlogSchema = new Schema({
//     title:  reqString, // String is shorthand for {type: String}
//     author: String,
//     postBody:   reqString,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });

//   export const Post =  mongoose.model("Post", BlogSchema)