import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { NoteModule } from './modules/note.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { PhotosModule } from './photos/photos.module';
import { DestinationModule } from './destination/destination.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      }
    }),
    MulterModule.register({
      dest: process.env.FILE_DIR
    }),
    NoteModule,
    AuthModule,
    UsersModule,
    ProfileModule,
    PhotosModule,
    DestinationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
