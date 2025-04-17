import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThiefDTO} from './dto/create-thief-dto';
import { ThiefEntity } from './entities/thief-entity';
import { UpdateThiefDTO } from './dto/update-thief-dto';
import { Prisma, SuspicionLevel } from 'generated/prisma';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ThiefService {
  constructor(private readonly authService: AuthService){}

  private readonly listOfThieves: ThiefEntity[] = [
    {
      name: 'Yossi',
      birthDate: '2014-07-01',
      levelOfSuspicion: 'Low',
      dateOfSuspicion: '2025-06-01',
      dateOfLastUpdate: '2025-04-17',
      id: 1,
    }
    

  ];
  private nextId = 2;

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
