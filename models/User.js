import mongoose from "mongoose";
//  import { Post } from "./blogSchema";
const reqString = {
    type: String, 
    required: true
}

const UserSchema = new mongoose.Schema({
    createdAt: Number, 
    updatedAt: Number,
    UserId: reqString , 
    firstName: reqString ,
    lastName: reqString,
    email: reqString ,
    password:reqString ,
    profilePic: reqString ,
     
    subscribers: {
        type: Number, 
        default: 0
    },
    subscribedUsers: {
        type: [String], 
        unique: true
    },
}, {
    timestamps: {currentTime: () => Math.floor(Date.now() / 1000)}
})

export default mongoose.model("User", UserSchema)