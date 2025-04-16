import { CreateThiefDTO } from "./create-thief-dto";
import {PartialType} from "@nestjs/mapped-types"

export class UpdateThiefDTO extends PartialType(CreateThiefDTO){}