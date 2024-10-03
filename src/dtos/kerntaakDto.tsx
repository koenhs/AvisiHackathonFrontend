import {WerkprocessDto} from "@/dtos/werkprocessDto";

export interface KerntaakDto {
    id: number
    name: string
    werkprocessen: WerkprocessDto[]
}