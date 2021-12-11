using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Departments;
using Core.Entities;

namespace BussinessLayer.Mappings
{
    public class MappingDepartments : Profile
    {
        public MappingDepartments()
        {
            CreateMap<CreateDepartmentDto, Department>()
                .ForMember(dest => dest.NumberOfEmployees, opt => opt.MapFrom(src => src.Employees.Count));
            
            CreateMap<UpdateDepartmentDto, Department>()
                .ForMember(dest => dest.NumberOfEmployees, opt => opt.MapFrom(src => src.Employees.Count));

            CreateMap<Department, DepartmentDto>().ReverseMap();
            
            CreateMap<Department, CompanyViewDepartmentDto>()
                .ForMember(dest => dest.NumberOfEmpoyees, opt => opt.MapFrom(src => src.Employees.Count));
        }
    }
}