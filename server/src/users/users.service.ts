import { Injectable, Global } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '../jwt/jwt.service';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.input';
import { LoginOutput } from './dto/login.dto';
import { SeeProfileOutput } from './dto/see-profile.dto';
import { CreateUserInput, CreateUserOutput } from './dto/create-user.dto';
import { FollowOutput } from './dto/follow.dto';
@Injectable()
@Global()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async findOne(id) {
    return await this.userRepository.findOne(id);
  }

  async findByUserId(userId: string): Promise<SeeProfileOutput> {
    try {
      const user = await this.userRepository.findOne({ userId });
      if (!user) {
        return {
          ok: false,
          error: `userId:${userId} not exists `,
        };
      }
      return {
        ok: true,
        user,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async create({
    userId,
    password,
  }: CreateUserInput): Promise<CreateUserOutput> {
    try {
      if (await this.userRepository.findOne({ userId })) {
        return {
          ok: false,
          error: `id:${userId} already exists `,
        };
      }
      const user = await this.userRepository.create({
        userId,
        password,
      });
      await this.userRepository.save(user);
      return {
        ok: true,
        user,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async login(userId: string, password: string): Promise<LoginOutput> {
    try {
      const user = await this.userRepository.findOne({ userId });

      if (user.checkPassword(password)) {
        const token = await this.jwtService.sign(user.userId);
        return {
          ok: true,
          token,
        };
      } else {
        return {
          ok: false,
          error: 'password incorrect',
        };
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async update(
    { id }: User,
    editUserProfile: EditProfileInput,
  ): Promise<EditProfileOutput> {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      if (editUserProfile.password) {
        user.password = editUserProfile.password;
      }
      const updatedUser = await this.userRepository.save(user);
      return {
        ok: true,
        user: user,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async follow(followeeId: string): Promise<FollowOutput> {
    const user = await this.userRepository.findOne({
      userId: followeeId,
    });
    if (!user) {
      return {
        ok: false,
        error: 'Cannot found user ',
      };
    }
    return {
      ok: true,
      follower: user,
    };
  }
}
