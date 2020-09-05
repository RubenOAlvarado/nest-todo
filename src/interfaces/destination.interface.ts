import { Document } from 'mongoose';

export interface Destination extends Document{
    readonly name: string;
    readonly description: string;
    readonly photo: string;
}