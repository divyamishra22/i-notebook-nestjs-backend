import { Body, ConflictException, Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { hash } from 'bcrypt';
// import { STATUS_CODES } from 'http';



@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    public static PASSWORD_SALT_ROUNDS = 10;
  
   async create(createuser): Promise<User>{
      const user = new this.userModel();
      user.name = createuser.name;
      user.password = createuser.password;
      user.password = await this.passToHash(user.password)
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
     
    async getusername(username:string): Promise<User>{
      return  await this.userModel.findOne({username}).exec();
    }



    private async passToHash(password: string): Promise<string> {
      return hash(password, UserService.PASSWORD_SALT_ROUNDS);
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

    

