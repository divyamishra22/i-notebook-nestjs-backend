import { Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
   
    // @ApiResponse({ type: string })
    @Post('/login')
     login() {

      return 'user created';
    }

}
