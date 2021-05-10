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
import { Follow } from './entities/follow.entity';
@Injectable()
@Global()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Follow)
    private readonly followRepository: Repository<Follow>,
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
        user: updatedUser,
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
      };
    }
  }

  async follow(
    followingUserId: string,
    followerUser: User,
  ): Promise<FollowOutput> {
    const followingUser = await this.userRepository.findOne({
      userId: followingUserId,
    });
    if (!followingUser) {
      return {
        ok: false,
        error: 'Cannot found user ',
      };
    }
    const followerUserId = followerUser.userId;
    const follow = await this.followRepository.create({
      followerUserId,
      followingUserId,
    });
    await this.followRepository.save(follow);
    return {
      ok: true,
      follower: followerUser,
      following: followingUser,
    };
  }
}
