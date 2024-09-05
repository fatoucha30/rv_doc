import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('inscription')
    async signUp(@Body() body: { username: string; password: string }) {
        await this.authService.signUp(body.username, body.password);
    }

    @Post('connexion')
    async signIn(@Body() body: { username: string; password: string }) {
        return this.authService.signIn(body.username, body.password);
    }
}