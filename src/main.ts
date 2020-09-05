import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { NoteModule } from 'src/modules/note.module';
import { UsersModule } from 'src/users/users.module';
import { ProfileModule } from 'src/profile/profile.module';
import { PhotosModule } from 'src/photos/photos.module';
import { AuthModule } from 'src/auth/auth.module';
import { DestinationModule } from 'src/destination/destination.module';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
                      .setTitle('Demo API for crisenix app')
                      .setDescription('Documentation for dummy crisenix services')
                      .setVersion('1.0')
                      .addTag('Demo')
                      .build();

  const appDocument = SwaggerModule.createDocument(app, options, {
    include: [AuthModule, NoteModule, UsersModule, ProfileModule, PhotosModule, DestinationModule]
  });

  SwaggerModule.setup('api', app, appDocument);

  await app.listen(PORT);
}
bootstrap();
