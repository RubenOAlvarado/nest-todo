import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Photos } from '../interfaces/photos.interface';
import { CreatePhotoDTO } from '../dtos/photos.dto';

@Injectable()
export class PhotosService {}
