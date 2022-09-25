import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AccessUserDetailsDto {
  @ApiProperty({
    name: 'clientId',
    description: 'client id of application requesting access',
    example: '600ee885924dd75267384cb5',
    required: true,
  })
  @IsNotEmpty()
  clientId: string;

  @ApiProperty({
    name: 'clientSecret',
    description: 'client secret of application requesting access',
    example: 'eaf2aae4-d4ff-4be2-912e-9e312b917154',
    required: true,
  })
  @IsNotEmpty()
  clientSecret: string;

  @IsNotEmpty()
  accessToken: string;
}
