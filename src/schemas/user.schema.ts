import * as mongoose from 'mongoose';
const {Schema} = mongoose;

export const UserSchema = new Schema({
    username: String,
    password: String,
    email:{
        type: String,
        unique: true
    },
    createdAt: { type: Date, default: Date.now },
    role:{
        type:String,
        enum:['admin', 'user'],
        default: 'user'
    }
});