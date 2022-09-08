import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { User, UserDocument } from '../model/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const {
      name = '',
      email = '',
      phone = '',
      password: plaintextPassword = '',
      birthDate = '',
      gender = false,
    } = createUserDto || null
    let encryptPassword
    const foundUser = await this.userModel.findOne({ email, phone})
    if (foundUser)
      return null;
      bcrypt.genSalt(9, function(err, salt) {
        bcrypt.hash(plaintextPassword, salt, function(err, hash) {
          // Store hash in your password DB.
          if (err) throw err;
          encryptPassword= hash;
        });
      }
    );
    const createdUser = await this.userModel.create({
      name,
      email,
      phone,
      password: encryptPassword,
      birthDate,
      gender
    });
    return createdUser;
  }

  async findOne(loginUserDto: LoginUserDto): Promise<User> {
    const { emailOrPhone = '', password = '' } = loginUserDto || null
    const foundUser = await this.userModel.findOne({
      $or: [
        { email: emailOrPhone},
        { phone: emailOrPhone},
      ]
    })
    if (!foundUser) {
      throw new Error('Not found user');
    }
    const isValidPassword = await bcrypt.compare(password, foundUser.password);
    if (!isValidPassword) {
      throw new Error('Invalid password');
    }
    return foundUser;
  }
};
