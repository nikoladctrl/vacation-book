using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.Departments
{
    public class UpdateDepartmentDto : CreateDepartmentDto
    {
        public int Id { get; set; }
    }
}