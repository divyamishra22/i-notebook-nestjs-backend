import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    //create user
  public   async createUser(user: Partial<User>):Promise<User>{
    const existinguser = await this.userModel.findOne({where: {email: user.email}})
           if(!existinguser){
        return await this.userModel.create(user);
          } 
          else{
            throw new ConflictException('Email already exists');
          }
    }
}
