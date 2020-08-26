import { Controller, Res, HttpStatus, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from '../dtos/user.dto';
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController{
    constructor(private usersService: UsersService){}

    @ApiResponse({status:201})
    @Post('add')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO){
        const user = await this.usersService.createUser(createUserDTO);
        return res.status(HttpStatus.CREATED).json({
            status: 201,
            message: "Successful",
            data: user
        });
    }

    @ApiResponse({status:200})
    @Get('all')
    async getUsers(@Res() res){
        const users = await this.usersService.getUsers();
        return res.status(HttpStatus.OK).json({
            status: 200,
            data: users
        });
    }

    @ApiResponse({status:200})
    @Patch('update/:id')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Param('id') _id: string){
        const user = await this.usersService.updateUser(_id, createUserDTO);
        if(!user) return res.status(HttpStatus.NOT_FOUND).json({status:404, error: 'Not Found!'});

        return res.status(HttpStatus.OK).json({status:200, message: 'Successful', user});
    }

    @ApiResponse({status:200})
    @Delete('delete/:id')
    async deleteUser(@Res() res, @Param('id') _id){
        const user = await this.usersService.deleteUser(_id);
        if(!user) return res.status(HttpStatus.NOT_FOUND).json({status:404, error: 'Not Found!'});

        return res.status(HttpStatus.OK).json({status: 200, message: 'Successful!'});
    }
}