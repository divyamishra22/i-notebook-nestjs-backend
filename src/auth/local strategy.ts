// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { AuthService } from "./auth.service";
// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy } from "passport-local";

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super();
//   }

//   async validate(name: string, password: string): Promise<any> {
//     const user = await this.authService.validateUser(name, password,);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     if(user && user.password===password){
//     return user;}
//   }

// }