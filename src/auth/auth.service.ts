import { Injectable, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';


    @Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getuserbyusername(username);
    if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   
    return user;
    }
    return null;
  }
}


