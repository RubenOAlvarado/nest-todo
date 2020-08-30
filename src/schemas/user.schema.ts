import * as mongoose from 'mongoose';
const {Schema} = mongoose;

export const UserSchema = new Schema({
    username: {type: String, unique:true},
    password: String,
    createdAt: { type: Date, default: Date.now },
    role:{
        type:String,
        enum:['admin', 'user'],
        default: 'user'
    }
});