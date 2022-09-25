import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    name: 'email',
    description: 'registered email id of student',
    example: 'yashkumar.verma2019@vitstudent.ac.in',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'password',
    description: 'password of user',
    example: '12345678',
    required: true,
  })
  @IsNotEmpty()
  password: string;
}
