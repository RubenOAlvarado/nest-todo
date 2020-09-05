import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotosSchema } from '../schemas/photos.schema';
import { PhotosService } from './photos.service';
import { PhotosController } from '../controllers/photos.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[
    UsersModule,
    AuthModule,
    MongooseModule.forFeature([{name: 'Photos', schema:PhotosSchema}]),
  ],
  providers: [PhotosService],
  controllers: [PhotosController],
  exports: [PhotosService]
})
export class PhotosModule {}