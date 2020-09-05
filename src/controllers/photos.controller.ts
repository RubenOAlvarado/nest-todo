import { Controller, Res, HttpStatus, Post, UseInterceptors, 
    UploadedFile,  UseGuards, Request } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { PhotosService } from '../photos/photos.service';
import { CreatePhotoDTO } from '../dtos/photos.dto';
import { editFileName, imageFileFilter } from '../photos/utils';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import 'dotenv/config';

@ApiTags('Photos')
@Controller('photos')
export class PhotosController{
    constructor(private photosService: PhotosService){}


    @ApiResponse({status:201})
    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('picture', {
        storage: diskStorage({
            destination: process.env.FILE_DIR,
            filename: editFileName
        }),
        fileFilter: imageFileFilter,
    }))
    async uploadedFile(@UploadedFile() file, @Request() req, @Res() res){
        const photo = await this.photosService.saveFile(req.user._id, file.path);
        return res.status(HttpStatus.CREATED).json({
            status:201,
            message: 'Photo uploaded',
            data: photo
        });
    }

}