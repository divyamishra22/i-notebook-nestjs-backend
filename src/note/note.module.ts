import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './note.schema';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/guards/jwt strategy';
import { AuthModule } from 'src/auth/auth.module';

@Module({imports: [
    MongooseModule.forFeature([{name: Note.name, schema: NoteSchema }]),
    AuthModule
  ],
  controllers: [NoteController],
  providers: [NoteService, ],
  
})

export class NoteModule {}
