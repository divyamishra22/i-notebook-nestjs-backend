import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";


@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://16.16.110.138:27017/mydb2',
    ),]
})
export class ProdDbModule {}