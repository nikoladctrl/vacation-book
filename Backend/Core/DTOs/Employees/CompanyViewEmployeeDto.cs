using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Enums;

namespace Core.DTOs.Employees
{
    public class CompanyViewEmployeeDto
    {
        public string FullName { get; set; }
        public YearsOfService YearsOfService { get; set; }
        public bool OnVacation { get; set; }
        public int? DaysLeft { get; set; }
        public string DepartmentName { get; set; }
    }
}