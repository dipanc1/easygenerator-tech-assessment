import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserBody {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
