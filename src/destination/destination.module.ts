import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinationService } from './destination.service';
import { DestinationController } from './destination.controller';
import {DestinationSchema} from '../schemas/destination.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Destination', schema: DestinationSchema}])],
  providers: [DestinationService],
  controllers: [DestinationController]
})
export class DestinationModule {}
