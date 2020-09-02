import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiTags, ApiResponse } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private authService: AuthService){}

  @ApiResponse({status:200})
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @ApiResponse({status:200})
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user;
  }
  
}