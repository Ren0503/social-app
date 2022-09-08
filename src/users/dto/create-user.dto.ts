export class CreateUserDto {
  name: string;
  password: string;
  email?: string;
  phone?: string;
  birthDate: Date;
  gender: boolean;
}
