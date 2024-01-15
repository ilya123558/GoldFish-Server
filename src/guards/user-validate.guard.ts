import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UserValidateGuard extends AuthGuard('user_validate') {}