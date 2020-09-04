import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {User} from '../interfaces/user.interface';
import {CreateUserDTO} from '../dtos/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        const {username, password} = createUserDTO;
        const newUser = await this.userModel({username});
        const user = await this.userModel.register(newUser, password);
        return user;
    }

    async getUsers(): Promise<User[]>{
        const users = await this.userModel.find().exec();
        return users;
    }

    async findOne(userName): Promise<User>{
        const user = await this.userModel.findOne({username: userName}).exec();
        return user;
    }

    async authenticateUser(username:string, password:string): Promise<User>{
        const {user} = await this.userModel.authenticate()(username, password);
        return user;
    }

    async deleteUser(_id):Promise<User>{
        const deletedUser = this.userModel.findByIdAndRemove(_id);
        return deletedUser;
    }
}
