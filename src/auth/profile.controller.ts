import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('profile')
export class ProfileController {
    @UseGuards(JwtAuthGuard)
    @Get()
    getProfile(@Request() req) {
        return req.user;
    }
    @Post()
    postProfile(@Request() req) {
        return req.user;
    }
}