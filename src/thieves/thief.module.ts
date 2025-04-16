import { Module } from '@nestjs/common';
import { ThiefController } from './thief.controller';
import { ThiefService } from './thief.service';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [ThiefController],
  providers: [ThiefService],
})
export class ThiefModule {}
