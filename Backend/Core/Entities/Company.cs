using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("Companies")]
    public class Company
    {
        public int Id { get; set; }

        [Required, StringLength(50, MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        public int BusinessId { get; set; } 

        public Business Business { get; set; } 
 
        public string Address { get; set; }
        
        [Required, StringLength(30, MinimumLength = 2)]
        public string Country { get; set; }
        
        public string Image { get; set; }
        
        public ICollection<Department> Departments { get; set; } = new List<Department>();
        
        public ICollection<Employee> Employees { get; set; } = new List<Employee>();
    }
}