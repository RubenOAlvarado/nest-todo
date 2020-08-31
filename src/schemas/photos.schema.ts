import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const PhotosSchema = new Schema({
    profilePic: String,
    hasProfilePic: Boolean,
    anotherPics: [String],
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});