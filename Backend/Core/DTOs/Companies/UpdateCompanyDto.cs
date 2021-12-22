using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.Companies
{
    public class UpdateCompanyDto : CreateCompanyDto
    {
        public int Id { get; set; }
        
        public string Image { get; set; }
    }
}