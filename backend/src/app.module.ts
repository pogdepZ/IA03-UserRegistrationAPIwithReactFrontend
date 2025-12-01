import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // Connect to MongoDB (ensure MongoDB is running)
    MongooseModule.forRoot('mongodb+srv://phong_db_user:96g8eHwFs3XxRK6p@cluster0.yzzcqmh.mongodb.net/user-regist-db?appName=Cluster0'), 
    UserModule,
  ],
})
export class AppModule {}