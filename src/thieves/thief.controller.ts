import { ValidationPipe,Controller, Get, Delete, Post, Body, Param, ParseIntPipe, Query, Patch } from '@nestjs/common';
import { ThiefService } from './thief.service';
import { CreateThiefDTO} from './dto/create-thief-dto';
import { UpdateThiefDTO } from './dto/update-thief-dto';
import { Prisma, SuspicionLevel } from 'generated/prisma';

@Controller('thieves')
export class ThiefController {
  constructor(private thiefService: ThiefService) {}
  
  @Post()
  sendNewList(@Body(ValidationPipe) createThiefDTO: Prisma.ThiefCreateInput[]) {
    return this.thiefService.createNewList(createThiefDTO);
  }

  @Get()
  findAllThieves(@Query('suspicionLevel') suspicionLvl?: SuspicionLevel,
   @Query('dateOfSuspicion') dateOfSuspicion?: string){
    return this.thiefService.findAllThieves(suspicionLvl,dateOfSuspicion);
  }

  @Get(':id')
  findOneThief(@Param('id', ParseIntPipe) id: number){
    return this.thiefService.findOneThief(id);
  }

  @Post('thief')
  addAThief(@Body(ValidationPipe) createThiefDTO:CreateThiefDTO){
    return this.thiefService.addAThief(createThiefDTO);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateThiefDTO: UpdateThiefDTO){
    return this.thiefService.updateAThief(id,updateThiefDTO);
  }

  @Delete()
  clearList(){
    return this.thiefService.clearList();
  }

  @Delete(':id')
  deleteAThief(@Param('id', ParseIntPipe) id: number){
    return this.thiefService.deleteAThief(id);
  }
}


