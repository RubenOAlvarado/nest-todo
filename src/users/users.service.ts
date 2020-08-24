import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {User} from '../interfaces/user.interface';
import {CreateUserDTO} from '../dtos/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async findOne(userName): Promise<User>{
        const user = await this.userModel.find({username: userName}).exec();
        return user;
    }
}
