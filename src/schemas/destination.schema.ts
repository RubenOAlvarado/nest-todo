import * as mongoose from 'mongoose';
const {Schema} = mongoose;

export const DestinationSchema = new Schema({
    name:String,
    description: String,
    photo: String,
    createdAt: { type: Date, default: Date.now },
});