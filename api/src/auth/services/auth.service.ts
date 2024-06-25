import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable, from, map, of, switchMap, tap } from 'rxjs';

import { JwtService } from '@nestjs/jwt';

import { MODELS, checkPasswordRegex } from 'src/constants';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { UserBody } from '../models/user-body.class';
import { User } from '../models/user.interface';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(MODELS.USER) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  hashPassword(password: string): Observable<string> {
    return from(bcrypt.hash(password, 12));
  }

  doesUserExist(email: string): Observable<boolean> {
    return from(this.userModel.findOne({ email })).pipe(
      switchMap((user: User) => {
        return of(!!user);
      }),
    );
  }

  registerAccount(user: UserBody): Observable<string> {
    const { email, password } = user;

    if (!checkPasswordRegex(password)) {
      throw new HttpException(
        'Password must be between 8 to 50 characters and contain at least one letter, one number, and one special character',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.doesUserExist(email).pipe(
      tap((doesUserExist: boolean) => {
        if (doesUserExist)
          throw new HttpException(
            'A user is already created with this email',
            HttpStatus.BAD_REQUEST,
          );
      }),
      switchMap(() => {
        return this.hashPassword(password).pipe(
          switchMap((hashedPassword: string) => {
            return from(
              this.userModel.create({
                ...user,
                password: hashedPassword,
              }),
            ).pipe(
              map((user: User) => {
                return this.jwtService.sign({ email: user.email });
              }),
            );
          }),
        );
      }),
    );
  }

  login(user: UserBody): Observable<string> {
    return from(this.validateUser(user)).pipe(
      map((user) => {
        if (!user) {
          throw new HttpException(
            'Invalid email or password',
            HttpStatus.BAD_REQUEST,
          );
        }
        return this.jwtService.sign({ email: user.email });
      }),
    );
  }

  validateUser(user: UserBody): Observable<User> {
    const password = user.password;
    return from(this.userModel.findOne({ email: user.email })).pipe(
      switchMap((user) => {
        return from(bcrypt.compare(password, user.password)).pipe(
          map((isPasswordMatched) => {
            if (isPasswordMatched) {
              return user;
            }
            return null;
          }),
        );
      }),
    );
  }

  async decodeToken(token: string) {
    const tokenString = token.split(' ')[1];
    const userDetails = await this.jwtService.decode(tokenString);
    return userDetails.email;
  }
}
