import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Photos } from '../interfaces/photos.interface';
import { CreatePhotoDTO } from '../dtos/photos.dto';

@Injectable()
export class PhotosService {
    constructor(@InjectModel('Photos') private readonly photosModel:Model<Photos>){}

    async saveFile(createPhotoDTO: CreatePhotoDTO):Promise<Photos>{
        const photo = await this.photosModel(createPhotoDTO);
        return photo.save();
    }
}
