import { Department } from "./department.model";

export interface Company
{
    id: number;
    name: string;
    business: string;
    address: string;
    country: string;
    numberOfDepartments: number;
    departments: Department[];
}