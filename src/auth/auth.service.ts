import { Injectable } from '@nestjs/common';
import {UsersService} from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.usersService.authenticateUser(username, password);

        return user;
    }

    async login(user: any){
        const payload = {username: user.username, sub: user._id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
