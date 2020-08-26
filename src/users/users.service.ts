import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {User} from '../interfaces/user.interface';
import {CreateUserDTO} from '../dtos/user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        const newUser = await this.userModel(createUserDTO);
        return newUser.save();
    }

    async getUsers(): Promise<User[]>{
        const users = await this.userModel.find().exec();
        return users;
    }

    async findOne(userName): Promise<User>{
        const user = await this.userModel.findOne({username: userName}).exec();
        return user;
    }

    async updateUser(_id, createUserDTO: CreateUserDTO):Promise<User>{
        const user = this.userModel.findByIdAndUpdate(_id, createUserDTO, {new:true});
        return user;
    }

    async deleteUser(_id):Promise<User>{
        const deletedUser = this.userModel.findByIdAndRemove(_id);
        return deletedUser;
    }
}
