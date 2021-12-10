using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs;
using Core.DTOs.Companies;
using Core.Entities;

namespace BussinessLayer.Mappings
{
    public class MappingCompanies : Profile
    {
        public MappingCompanies()
        {
            CreateMap<CreateCompanyDto, Company>()
                .ForMember(dest => dest.NumberOfDepartments, opt => opt.MapFrom(src => src.Departments.Count));

            CreateMap<UpdateCompanyDto, Company>()
                .ForMember(dest => dest.NumberOfDepartments, opt => opt.MapFrom(src => src.Departments.Count));
            
            CreateMap<Company, CompanyDto>()
                .ForMember(dest => dest.Departments, opt => opt.MapFrom(src => src.Departments.Count))
                .ReverseMap();
        }
    }
}