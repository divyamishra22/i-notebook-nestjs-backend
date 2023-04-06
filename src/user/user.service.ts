import { Body, ConflictException, Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiProperty, PartialType } from '@nestjs/swagger';
// import { STATUS_CODES } from 'http';



@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
    create(createuser): Promise<User>{
      const user = new this.userModel();
      user.name = createuser.name;
      user.password = createuser.password;
      user.email = createuser.email;
      return user.save();
    }
    findall(): Promise<User[]>{
      return this.userModel.find().exec();
    }
    findOne(id:string): Promise<User>{
     return this.userModel.findById(id).exec();
    }
   
    remove(id:string){
      return this.userModel.deleteOne({id:id}).exec();
    }
     
    getusername(username:string): Promise<User>{
      return this.userModel.findOne({username}).exec();
    }


    
    //create user
  // public   async createUser(user: Partial<User>):Promise<User>{
  //   const existinguser = await this.userModel.findOne({where: {email: user.email}})
  //          if(!existinguser){
  //       return await this.userModel.create(user);
  //         } 
  //         else{
  //           throw new ConflictException('Email already exists');
  //         }
  //   }

  
  }

    

