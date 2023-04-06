import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from "src/user/user.service";
// import { UserService } from "src/user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService,private userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.getusername(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    if(user && user.password===password){
    return user;}
  }

  // async Validate(username: string, password: string): Promise<any> {
  //   const user = await this.authService.ValidateUser(username, password);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
}