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
            CreateMap<CreateDepartmentDto, Department>();
            
            CreateMap<UpdateDepartmentDto, Department>();

            CreateMap<Department, DepartmentDto>()
                .ReverseMap();
            
            CreateMap<Department, CompanyViewDepartmentDto>()
                .ForMember(dest => dest.NumberOfEmpoyees, opt => opt.MapFrom(src => src.Employees.Count));
            
            CreateMap<CreateDepartmentInCompanyDto, Department>();

            CreateMap<Department, int>()
                .ConvertUsing(src => src.Id);
        }
    }
}