import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Destination} from '../interfaces/destination.interface';
import{CreateDestinationDTO} from '../dtos/destination.dto';

@Injectable()
export class DestinationService {
    constructor(@InjectModel('Destination') private readonly destinationModel: Model<Destination>){}

    async createDestination(createDestinationDTO: CreateDestinationDTO, photo: string):Promise<Destination>{
        const {name, description} = createDestinationDTO;
        const newDestination = await this.destinationModel({name, description, photo});
        return newDestination.save();
    }

    async findDestinationByName(name:string):Promise<Destination>{
        const destiny = await this.destinationModel.findOne({name}).exec();
        return destiny;
    }

    async findDestinations():Promise<Destination[]>{
        const destinations = await this.destinationModel.find().exec();
        return destinations;
    }

    async deleteDestination(_id:string):Promise<Destination>{
        const deletedDestination = await this.destinationModel.findByIdAndRemove(_id);
        return deletedDestination;
    }
}
