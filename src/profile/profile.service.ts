import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Profile} from '../interfaces/profile.interface';
import {CreateProfileDTO} from '../dtos/profile.dto';

@Injectable()
export class ProfileService {
    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>){}

    async createProfile(createProfileDTO: CreateProfileDTO):Promise<Profile>{
        const newProfile = await this.profileModel(createProfileDTO);
        return newProfile.save();
    }

    async getProfiles():Promise<Profile>{
        const profiles = await this.profileModel.find().populate('user').exec();
        return profiles;
    }

    async getAProfile(profileId):Promise<Profile>{
        const profile = await this.profileModel.findById(profileId).populate('user').exec();
        return profile;
    }

    async updateProfile(_id, createProfileDTO: CreateProfileDTO):Promise<Profile>{
        const updatedProfile = await this.profileModel.findByIdAndUpdate(_id, createProfileDTO, {new:true});
        return updatedProfile;
    }

    async deleteProfile(_id):Promise<Profile>{
        const deletedProfile = await this.profileModel.findByIdAndRemove(_id);
        return deletedProfile;
    }
}
