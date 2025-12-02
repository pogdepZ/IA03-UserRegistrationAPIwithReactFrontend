import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // Connect to MongoDB (ensure MongoDB is running)
    MongooseModule.forRoot(process.env.MONGO_URL as string), 
    UserModule,
  ],
})
export class AppModule {}