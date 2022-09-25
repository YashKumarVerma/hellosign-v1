import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  /** college email id of student  */
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'college email id of student ',
    example: 'yashkumar.verma2019@vitstudent.ac.in',
    required: true,
  })
  email: string;

  /** password of student */
  @IsNotEmpty()
  @ApiProperty({
    description: 'password',
    example: '12345678',
    required: true,
  })
  password: string;
}

export class LoginDtoWithToken extends LoginDto {
  @IsNotEmpty()
  token: string;
}
