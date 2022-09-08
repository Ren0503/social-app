import { IsEmail, IsNotEmpty, Length, IsDate, IsNumber } from "class-validator";

export class CreateUserDto {
  @Length(6, 24)
  name: string;

  @IsNotEmpty()
  password: string;

  @IsEmail()
  email?: string;

  @IsNumber()
  phone?: string;
  
  @IsDate()
  birthDate: Date;
  
  @IsNotEmpty()
  gender: boolean;
}
