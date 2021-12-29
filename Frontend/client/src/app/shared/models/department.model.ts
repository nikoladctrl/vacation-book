import { Company } from "./company.model";
import { Employee } from "./employee.model";

export interface Department
{
    id: number;
    name: string;
    company: Company;
    numberOfEmployees: number;
    employees: Employee[];
}