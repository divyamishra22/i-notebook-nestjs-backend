import { Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';


// export interface JWTPayload {
//   userid: string;
// }



@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
    private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findbyemail(email);
    if (user) {

  //  const passMatch = await this.matchPassHash(pass, user.password);
  //     if (!passMatch) {
  //        throw new UnauthorizedException('Password is wrong');

  //     }
      return user;
      }
    return null;
  }

  async login(email:string,password:string): Promise<any>{
    const user =  await this.validateUser(email,password);
    if(!user){
    return 'user does not exist';
  }
  if(user &&  this.matchPassHash(password, user.password))
  {
    // const payload: JWTPayload = { userid: user._id };
    // const jwt = await this.jwtService.sign({payload});
    // return {token: jwt,
    //   expiresIn: '30 days',};
    return this.signUser(user._id, user.email, 'user');
  }
  else{
    return 'password not match';
  }
  

}

private async matchPassHash(
  password: string,
  hash: string,
): Promise<boolean> {
  return (await compare(password, hash)) === true;
}


signUser(userId: string, email: string, type:string){
  return this.jwtService.sign({
    sub:userId,
    email:email,
    type:type,
  })
}

}