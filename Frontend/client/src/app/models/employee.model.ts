import { Company } from './company.model';
import { Department } from "./department.model";

export interface Employee 
{
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    yearsOfService: string;
    holidaysStartOn?: Date;
    holidaysEndOn?: Date;
    onVacation: boolean;
    department?: Department;
    company: Company; 
    daysOfPerYear: number;
    image?: string;
}