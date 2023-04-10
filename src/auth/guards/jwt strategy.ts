import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";
import { jwtConstants } from "../constants";

// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtStrategy extends  PassportStrategy(Strategy){
 
 constructor( private userService: UserService){
      
    super({
      //  usernameField: 'email',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: jwtConstants.secret,
       
    });
 }

 async validate(payload:any){
   //  return {...payload.user};
   console.log('validate');
   const{userid} = payload
   const user = await this.userService.findOne(userid);
   
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log('validate()',payload);
    return payload;
  }
//    return { password: payload.password, username: payload.usernameField };
//  }
    
}



// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private jwtService: JwtService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const token = this.extractTokenFromHeader(request);
//     if (!token) {
//       throw new UnauthorizedException();
//     }
//     try {
//       const payload = await this.jwtService.verifyAsync(
//         token,
//         {
//           secret: 'divya123'
//         }
//       );
//       
//       request['user'] = payload;
//     } catch {
//       throw new UnauthorizedException();
//     }
//     return true;
//   }

//   private extractTokenFromHeader(request: Request): string | undefined {
//    const [type, token] = request.headers.authorization?.split(' ') ?? [];
//    return type === 'Bearer' ? token : undefined;
   
//  }
// }

