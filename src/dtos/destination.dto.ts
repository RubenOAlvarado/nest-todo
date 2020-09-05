import { ApiProperty } from "@nestjs/swagger";

export class CreateDestinationDTO{
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;
}