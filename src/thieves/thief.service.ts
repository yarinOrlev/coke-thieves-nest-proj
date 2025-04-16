import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThiefDTO} from './dto/create-thief-dto';
import { ThiefEntity } from './entities/thief-entity';
import { UpdateThiefDTO } from './dto/update-thief-dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma, SuspicionLevel } from 'generated/prisma';

@Injectable()
export class ThiefService {
  constructor(private readonly dataBaseService: DatabaseService){}

  private readonly listOfThieves: ThiefEntity[] = [];
  private nextId = 1;

  createNewList(thieves: CreateThiefDTO[]) : ThiefEntity[] {
    // Save the new list of thieves in the database
    
    const thievesWithId = thieves.map(thief => ({
      ...thief,
      id: this.nextId++,
    }));

    this.listOfThieves.push(...thievesWithId);
    return this.listOfThieves;
  }

  findAllThieves(suspicionLvl?: SuspicionLevel, dateOfSuspicion?: string) {
    if (suspicionLvl) {
       const susLvlArray = this.listOfThieves.filter(thief => thief.levelOfSuspicion === suspicionLvl);
       if(susLvlArray.length === 0) {
        throw new NotFoundException('Suspicion Level Not Found')
       }
       return susLvlArray;
    }

    if (dateOfSuspicion) {
       const suspicionDatesArray = this.listOfThieves.filter(thief => thief.dateOfSuspicion === dateOfSuspicion);
       if(suspicionDatesArray.length === 0) {
        throw new NotFoundException('Date Of Suspicion Not Found')
       }
       return suspicionDatesArray;
    }

    return this.listOfThieves;
  }

  findOneThief(id: number) {
    const thief = this.listOfThieves.find(thief => thief.id === id);

    if (!thief){
      throw new NotFoundException('Thief not found');
    }
    
    return thief;

  }

  addAThief(thief: CreateThiefDTO): ThiefEntity[] {
    const thiefWithId = {
      ...thief,
      id: this.nextId++,
    };
    this.listOfThieves.push(thiefWithId);
    return this.listOfThieves;
  }

  clearList(){
    this.listOfThieves.length = 0;
    return this.listOfThieves;
  }

  deleteAThief(id: number) {
    const index = this.listOfThieves.findIndex(thief => thief.id === id);
  
    if (index === -1) {
      return { message: `Thief with id ${id} not found.` };
    }
  
    this.listOfThieves.splice(index, 1);
    return { message: `Thief with id ${id} deleted.` };
  }

  updateAThief(id: number, updateThiefDTO: UpdateThiefDTO){
    const thiefIndex = this.listOfThieves.findIndex(thief => thief.id === id);

  if (thiefIndex === -1) {
    return { message: `Thief with id ${id} not found.` };
  }

  const existingThief = this.listOfThieves[thiefIndex];

  const updatedThief = {
    ...existingThief,
    ...updateThiefDTO,
    id: existingThief.id,
  };

  this.listOfThieves[thiefIndex] = updatedThief;

  return updatedThief;
  }
  
}
