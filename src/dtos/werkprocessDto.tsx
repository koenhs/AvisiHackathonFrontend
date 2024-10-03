import {CriteriumDto} from "@/dtos/criteriumDto";

export interface WerkprocessDto{
    id: number
    name: string
    description: string
    criteria: CriteriumDto[]
}