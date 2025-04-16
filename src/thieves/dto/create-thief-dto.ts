import { IsArray, isDate, isDateString, IsDateString, IsEnum, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";
import { SuspicionLevel } from "generated/prisma";
//  export enum SuspicionLevel {
//     Low = "Low",
//     Medium = "Medium",
//     High = "High",
//   } 
export class CreateThiefDTO{

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsDateString()
    readonly birthDate: string;

    @IsNotEmpty()
    @IsEnum(SuspicionLevel, {message: 'Valid Suspicion level required'})
    readonly levelOfSuspicion: SuspicionLevel;
    
    @IsNotEmpty()
    @IsDateString()
    readonly dateOfSuspicion: string;

    @IsNotEmpty()
    @IsDateString()
    readonly dateOfLastUpdate: string;

}