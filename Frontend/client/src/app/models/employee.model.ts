import { Department } from "./department.model";

export interface Employee 
{
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    yearsOfService: number;
    holidaysStartOn?: Date;
    holidaysEndOn?: Date;
    onVacation: boolean;
    department?: Department; 
    daysOfPerYear: number;
}