using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs;
using Core.DTOs.Companies;
using Core.Entities;
using Core.Enums;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BussinessLayer.Mappings
{
    public class MappingCompanies : Profile
    {
        public MappingCompanies()
        {
            CreateMap<CreateCompanyDto, Company>();

            CreateMap<UpdateCompanyDto, Company>();
            
            CreateMap<Company, CompanyDto>()
                // .ForMember(dest => dest.Business, opt => opt.MapFrom(src => Enum.GetName(typeof(Business), src.Business)))
                .ForMember(dest => dest.NumberOfDepartments, opt => opt.MapFrom(src => src.Departments.Count))
                .ReverseMap();
        }
    }
}