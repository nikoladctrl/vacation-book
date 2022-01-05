import { Department } from "../../departments/model/department.model";
import { Employee } from "../../employees/model/employee.model";
import { Business } from "./business.model";

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