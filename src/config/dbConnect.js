import mongoose from "mongoose";

mongoose.connect("mongodb+srv://tiago:12071998@cluster0.eq9qkbk.mongodb.net/alura-node")

let db = mongoose.connection

export default db;