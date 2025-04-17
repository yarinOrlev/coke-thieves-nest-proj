import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {JwtService} from '@nestjs/jwt';

type AuthInput = {username: string, password:string};
type AuthResult = {accessToken: string, userId: number, username: string};
type SignInData = {userId: number, username: string};

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
         private jwtService: JwtService){}

    async authenticate(input: AuthInput): Promise<AuthResult>{
        const user =  await this.validateuser(input);

        if(!user){
            throw new UnauthorizedException();
        }
        
        return this.login(user);
    }


    async validateuser(input: AuthInput){
        const user = this.userService.findUserByName(input.username);

        if(user && user.password === input.password){
            return {
                userId: user.userId,
                username: user.username,
            };
        }

        return null;
    }

    async login(user:SignInData){
        const tokenPayload = {
            sub: user.userId,
            username: user.username,
        };

        const accessToken = await this.jwtService.signAsync(tokenPayload);

        return {accessToken, username: user.username, userId: user.userId};

    }

}
