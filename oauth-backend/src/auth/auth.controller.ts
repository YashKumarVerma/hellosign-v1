import { Controller, Post, UsePipes, ValidationPipe, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.checkLogin(loginDto);
  }

  @Get('/test')
  @UseGuards(JwtAuthGuard)
  sayHello() {
    return { working: true };
  }
}
