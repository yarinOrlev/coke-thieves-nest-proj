import { Request,Get,Body, Controller, NotImplementedException, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guards';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

@Post('login')
login(@Body() input: {username: string, password: string}){
    return this.authService.authenticate(input);
}

@UseGuards(AuthGuard)
@Get('me')
getUserInfo(@Request() request){
    return request.user;
}
}
