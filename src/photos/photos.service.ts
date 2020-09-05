import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Photos } from '../interfaces/photos.interface';
import { CreatePhotoDTO } from '../dtos/photos.dto';

@Injectable()
export class PhotosService {
    constructor(@InjectModel('Photos') private readonly photosModel:Model<Photos>){}

    async saveFile(id: string, filename: string):Promise<Photos>{
        const createPhotoDTO = new CreatePhotoDTO();
        createPhotoDTO.profilePic = filename;
        createPhotoDTO.hasProfilePic = true;
        createPhotoDTO.user = id;
        const photo = await this.photosModel(createPhotoDTO);
        return photo.save();
    }
}
