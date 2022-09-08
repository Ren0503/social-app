import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  @Post('/login')
  async login(@Body() loginUserDto:LoginUserDto) {
    await this.usersService.findOne(loginUserDto);
  }
};
