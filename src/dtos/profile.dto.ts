import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDTO{
    @ApiProperty()
    name: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    secondLastName: string;

    @ApiProperty()
    birthDate: Date;

    @ApiProperty()
    age: number;
}