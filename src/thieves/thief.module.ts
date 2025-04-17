import { Module } from '@nestjs/common';
import { ThiefController } from './thief.controller';
import { ThiefService } from './thief.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';


@Module({
  imports: [DatabaseModule],
  controllers: [ThiefController],
  providers: [ThiefService,AuthService,UsersService],
})
export class ThiefModule {}
