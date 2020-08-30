import { Controller, Res, HttpStatus, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProfileService } from '../profile/profile.service';
import { CreateProfileDTO } from '../dtos/profile.dto';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController{
    constructor(private profileService: ProfileService){}

    @ApiResponse({status:201})
    @Post('/add')
    async createProfile(@Res() res, @Body() createProfileDTO: CreateProfileDTO){
        const profile = await this.profileService.createProfile(createProfileDTO);
        return res.status(HttpStatus.CREATED).json({
            status: 201,
            message: "Successful",
            data: profile
        });
    }

    @ApiResponse({status:200})
    @Get('/all')
    async getProfiles(@Res() res){
        const profiles = await this.profileService.getProfiles();
        return res.status(HttpStatus.OK).json({
            status: 200,
            data: profiles
        });
    }

    @ApiResponse({status:200})
    @Get('/:id')
    async getUserProfile(@Res() res, @Param('id') _id:string){
        const profile = await this.profileService.getAProfile(_id);
        if(!profile) return res.status(HttpStatus.NOT_FOUND).json({status:404, error: 'User Not Found'});

        return res.status(HttpStatus.OK).json({status:200, data: profile});
    }

    @ApiResponse({status:200})
    @Patch('update/:id')
    async updateProfile(@Res() res, @Body() createProfileDTO: CreateProfileDTO, @Param('id') _id:string){
        const profile = await this.profileService.updateProfile(_id, createProfileDTO);
        if(!profile) return res.status(HttpStatus.NOT_FOUND).json({status:404, error: 'User Not Found'});

        return res.status(HttpStatus.OK).json({
            status: 200,
            message: 'Successful!',
            data: profile
        });
    }

    @ApiResponse({status:200})
    @Delete('delete/:id')
    async deleteProfile(@Res() res, @Param('id') _id:string){
        const profile = await this.profileService.deleteProfile(_id);
        if(!profile) return res.status(HttpStatus.NOT_FOUND).json({status:404, error: 'User Not Found'});

        return res.status(HttpStatus.OK).json({status: 200, message: 'Successful!'});
    }
}