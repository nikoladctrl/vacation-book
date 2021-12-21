using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Businesses;
using Core.Entities;

namespace BussinessLayer.Mappings
{
    public class MappingBusinesses : Profile
    {
        public MappingBusinesses()
        {

            // CreateMap<string, Business>()
            //     .ForMember(dest => dest.Name, opt => opt.MapFrom(src => new Business { Name = src }));

            CreateMap<CreateBusinessDto, Business>();
            CreateMap<UpdateBusinessDto, Business>();
            CreateMap<Business, BusinessDto>().ReverseMap();
        }
    }
}