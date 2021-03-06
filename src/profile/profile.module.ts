import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from '../schemas/profile.schema';
import { ProfileController } from '../controllers/profile.controllers';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Profile', schema: ProfileSchema },])
  ],
  providers: [ProfileService],
  controllers:[ProfileController],
  exports: [ProfileService]
})
export class ProfileModule {}
