import { Document } from 'mongoose';

export interface Profile extends Document{
    readonly name: string,
    readonly lastName: string,
    readonly secondLastname: string,
    readonly birthDate: Date,
    readonly photo: string,
    readonly age: number,
    readonly user: string,
}