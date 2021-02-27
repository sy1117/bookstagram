import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { LoginInput } from './dto/login.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create({ userName, password }: CreateUserInput) {
    const createdUser = await this.userRepository.save(
      this.userRepository.create({ userName, password }),
    );
    return createdUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login({ userName, password }: LoginInput) {
    try {
      const user = await this.userRepository.findOne({ userName, password });
      if (!user) {
        return {
          userName: 'unknown',
          password: '123f',
        };
      }
      return user;
    } catch (error) {}
  }
}
