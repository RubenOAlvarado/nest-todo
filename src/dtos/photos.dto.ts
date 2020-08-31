import { ApiProperty } from "@nestjs/swagger";

export class CreatePhotoDTO{
    @ApiProperty()
    profilePic: string;

    @ApiProperty()
    hasProfilePic:  boolean;

    @ApiProperty()
    user: string;
}