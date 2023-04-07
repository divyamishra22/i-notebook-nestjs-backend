import { Injectable} from '@nestjs/common';

import { UserService } from 'src/user/user.service';


    @Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findbyemail(email);
    if (user && user.password === pass) {
      return user;
      }
    return null;
  }

  async login(email:string,password:string): Promise<any>{
    const user =  await this.validateUser(email,password);
    if(!user){
    return 'user does not exist';
  }
  if(user && user.password === password)
  {
    return user;
  }
  else{
    return 'password not match';
  }
  

}


}