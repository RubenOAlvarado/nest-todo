import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotosSchema } from '../schemas/photos.schema';
import { PhotosService } from './photos.service';
import { PhotosController } from '../controllers/photos.controller';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: 'Photos',
        useFactory: () => {
          const schema = PhotosSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        }
      }
    ]),
  ],
  providers: [PhotosService],
  controllers: [PhotosController],
  exports: [PhotosService]
})
export class PhotosModule {}