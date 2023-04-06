import { Injectable, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';


    @Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getusername(username);
    if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   
    return user;
    }
    return null;
  }

  // async ValidateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }
}


