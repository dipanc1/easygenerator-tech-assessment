import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';

import { UserSchema } from './schemas/user.schema';

import { MODELS } from 'src/constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwt-auth.guard';
import { JwtGuardStrategy } from './guards/jwt-auth.strategy';

@Module({
  imports: [
    PassportModule,
    MongooseModule.forFeature([{ name: MODELS.USER, schema: UserSchema }]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '3600s',
        },
        global: true,
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [JwtGuardStrategy, JwtGuard, AuthService],
})
export class AuthModule {}
