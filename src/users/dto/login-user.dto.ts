import { IsNotEmpty } from "class-validator";

export class LoginUserDto {
  @IsNotEmpty()
  emailOrPhone: string

  @IsNotEmpty()
  password: string;
}