import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const ProfileSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    secondLastName: String,
    birthDate: {type:Date, min: '1940-01-01'},
    age: {type: Number, required:true, min: 18, max: 90},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});