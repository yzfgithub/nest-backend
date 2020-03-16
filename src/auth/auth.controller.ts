import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('getToken')
    getTokenByUserId(@Body('phone') phone: string,@Body('password') password: string){
        return this.authService.createToken(phone,password);
    }
}