import { Document } from 'mongoose';

export interface Photos extends Document{
    readonly profilePic: string,
    readonly hasProfilePic: boolean,
    readonly anotherPics: [string],
    readonly user: string,
}