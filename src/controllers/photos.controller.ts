import { Controller, Res, HttpStatus, Post, UseInterceptors, UploadedFile, UploadedFiles, Get, Param, Body } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { PhotosService } from '../photos/photos.service';
import { CreatePhotoDTO } from '../dtos/photos.dto';


@ApiTags('Photos')
@Controller('photos')
export class PhotosController{
    constructor(private photosService: PhotosService){}

    @ApiResponse({status:201})
    @Post('upload')
    @UseInterceptors(FileInterceptor('picture', {
        storage: diskStorage({
            destination: './uploads'
        }),
    }))
    async uploadedFile(@UploadedFile() file, @Res() res){
        //const photo = await this.photosService.saveFile(createPhotosDTO);
        return res.status(HttpStatus.CREATED).json({
            status:201,
            message: 'Photo uploaded'
        });
    }

}