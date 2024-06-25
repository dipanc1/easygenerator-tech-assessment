import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UserBody } from '../models/user-body.class';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() req: UserBody): Observable<string> {
    return this.authService.registerAccount(req);
  }

  @Post('login')
  login(@Body() req: UserBody): Observable<string> {
    return this.authService.login(req);
  }
}
