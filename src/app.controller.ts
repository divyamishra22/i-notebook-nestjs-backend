import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Post('/login')
  //   @UseGuards(LocalAuthGuard)
  //  async  login(@Body() verifyuser:UserVerifyRequestBody):Promise<User> {

  //    const usercheck =  await this.uservalidate.validate(verifyuser.name, verifyuser.password);
  //    if(usercheck)
  //    return usercheck;
  //   }
}
