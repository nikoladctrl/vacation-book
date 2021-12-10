using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Employees;
using Core.Entities;

namespace BussinessLayer.Mappings
{
    public class MappingEmployees : Profile
    {
        public MappingEmployees()
        {
            CreateMap<CreateEmployeeDto, Employee>()
                .ForMember(dest => dest.YearsOfService, opt => opt.MapFrom(src => src.YearsOfService));
            CreateMap<UpdateEmployeeDto, Employee>();
            CreateMap<Employee, EmployeeDto>().ReverseMap();
        }
    }
}