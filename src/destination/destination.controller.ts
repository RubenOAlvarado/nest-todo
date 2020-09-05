import { Controller, Res, HttpStatus, Post, UseInterceptors, 
    UploadedFile,  UseGuards, Get, Body, Param, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { editFileName, imageFileFilter } from '../photos/utils';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {DestinationService} from './destination.service';
import {CreateDestinationDTO} from '../dtos/destination.dto';
import 'dotenv/config';

@ApiTags('Destination')
@Controller('destination')
export class DestinationController {
    constructor(private destinationService: DestinationService){}

    @ApiResponse({status:201})
    @UseGuards(JwtAuthGuard)
    @Post('create')
    @UseInterceptors(FileInterceptor('picture', {
        storage: diskStorage({
            destination: process.env.FILE_DIR,
            filename: editFileName
        }),
        fileFilter: imageFileFilter,
    }))
    async createDestination(@UploadedFile() file, @Body() createDestinationDTO: CreateDestinationDTO, @Res() res){
        const destination = await this.destinationService.createDestination(createDestinationDTO, file.path);
        return res.status(HttpStatus.CREATED).json({
            status:201,
            message: 'Destination created',
            data: destination
        });
    }

    @ApiResponse({status:200})
    @Get('all')
    async getAll(@Res() res){
        const destinations = await this.destinationService.findDestinations();
        return res.status(HttpStatus.OK).json({
            status:200,
            message: 'Destinations finded',
            data: destinations
        });
    }

    @ApiResponse({status:200})
    @Get(':name')
    async getDestination(@Res() res, @Param('name') name:string){
        const destination = await this.destinationService.findDestinationByName(name);
        return res.status(HttpStatus.OK).json({
            status:200,
            message: 'Destination finded',
            data: destination
        });
    }

    @ApiResponse({status:200})
    @Delete('delete/:id')
    async deleteDestination(@Res() res, @Param('id') _id:string){
        const response = await this.destinationService.deleteDestination(_id);
        return response;
    }

}
