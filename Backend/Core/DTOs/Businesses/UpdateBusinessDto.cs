using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.Businesses
{
    public class UpdateBusinessDto : CreateBusinessDto
    {
        public int Id { get; set; }
    }
}