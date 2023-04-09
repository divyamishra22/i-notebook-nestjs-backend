import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";



@Injectable()
export class JwtStrategy extends  PassportStrategy(Strategy){
 constructor(){
      
    super({
        JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'divya123',
    });
 }

 async validate(payload:any){
    return {...payload.user};
 }
    
}