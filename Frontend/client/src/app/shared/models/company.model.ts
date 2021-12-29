import { Business } from "./business.model";
import { Department } from "./department.model";
import { Employee } from "./employee.model";

export interface Company
{
    id: number;
    name: string;
    business: Business;
    address: string;
    country: string;
    numberOfDepartments: number;
    image?: string;
    departments: Department[];
    employees: Employee[];
}