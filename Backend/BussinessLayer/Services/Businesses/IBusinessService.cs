using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Businesses;
using Core.Entities;

namespace BussinessLayer.Services.Businesses
{
    public interface IBusinessService
    {
        Task<BusinessDto> CreateBusiness(CreateBusinessDto createBusinessDto);
        Task<BusinessDto> UpdateBusiness(UpdateBusinessDto updateBusinessDto);
        Task DeleteBusiness(int id);
        Task<List<BusinessDto>> GetBusinesses();
        Task<BusinessDto> GetBusiness(int id);
    }
}