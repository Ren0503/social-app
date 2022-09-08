import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/service/users.service';
import { JwtService } from "@nestjs/jwt";
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(loginUserDto: LoginUserDto) {
    const result = await this.usersService.findOne(loginUserDto);
    if (!result) return null;
    return result;
  }
}
