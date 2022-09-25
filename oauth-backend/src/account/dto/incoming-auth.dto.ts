import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class IncomingAuthDto {
  /** client ID  */
  @ApiProperty({
    description: 'client ID of application that has initiated the auth',
    example: '96cdb2d6-1f06-436c-a540-a39281630ff6',
  })
  @IsNotEmpty()
  client_id: string;

  /** redirect URI */
  @IsNotEmpty()
  redirect_uri: string;

  /** scope of application */
  //   @IsNotEmpty()
  //   @Validate(ApplicationScopes)
  //   scope: string;
}

export class IncomingAuthLoginDto extends IncomingAuthDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
