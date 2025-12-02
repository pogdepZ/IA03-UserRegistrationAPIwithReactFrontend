import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post('register')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.userService.create(createUserDto);
        return {
            message: 'User registered successfully',
            user: {
                email: user.email,
                createdAt: user.createdAt,
            },
        };
    }
}