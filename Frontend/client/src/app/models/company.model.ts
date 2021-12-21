import { Department } from "./department.model";
import { Employee } from "./employee.model";

export interface Company
{
    id: number;
    name: string;
    business: string;
    address: string;
    country: string;
    numberOfDepartments: number;
    departments: Department[];
    employees: Employee[];
}