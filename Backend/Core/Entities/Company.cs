using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Core.Enums;

namespace Core.Entities
{
    [Table("Companies")]
    public class Company
    {
        public int Id { get; set; }

        [Required, StringLength(50, MinimumLength = 3)]
        public string Name { get; set; } 

        [Required] 
        public Bussiness Bussiness { get; set; } 
 
        public string Address { get; set; }
        
        [Required, StringLength(30, MinimumLength = 2)]
        public string Country { get; set; }

        public int NumberOfDepartments { get; set; }
        
        public ICollection<Department> Departments { get; set; } = new List<Department>();
    }
}