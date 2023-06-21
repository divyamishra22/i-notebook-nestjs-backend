import { Body, ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
      const email = createuser.email;
      const findemail = await this.userModel.findOne({email}).exec();
      if(!findemail){
      user.email = createuser.email;
      }
      else{
        throw new HttpException(
          'Email already exists',
          HttpStatus.BAD_REQUEST,
        );
      }

      return user.save();
    }
    findall(): Promise<User[]>{
      return this.userModel.find().exec();
    }
     findOne(id:string): Promise<User>{
     return  this.userModel.findOne({id}).exec();
    }

    findUser(id:string): Promise<User>{
      return this.userModel.findOne({_id:id}).exec();
    }


   
    remove(id:string){
      return this.userModel.deleteOne({id}).exec();
    }
     
     getusername(name:string): Promise<any>{
      return   this.userModel.findOne({name: name}).exec();
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
     
  async findbyemail(email:string): Promise<any>{
    return await this.userModel.findOne({email}).exec();
  }

 async  updateuserdetails(userId, updateuserdetails){
    const user = await this.userModel.findOne({_id: userId}).exec();
    if(updateuserdetails.name){
      user.name = updateuserdetails.name;
    }
    if(updateuserdetails.password){
       user.password = updateuserdetails.password;
    }
    if(updateuserdetails.email){
       user.email = updateuserdetails.email;
    }
     
      return  user.save();
  }

  
  }

    

