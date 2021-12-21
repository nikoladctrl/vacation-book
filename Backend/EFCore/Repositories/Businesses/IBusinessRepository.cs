using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace EFCore.Repositories.Businesses
{
    public interface IBusinessRepository
    {
        Task<Business> CreateBusiness(Business business);
        Task<Business> UpdateBusiness(Business business);
        Task DeleteBusiness(int id);
        Task<List<Business>> GetBusinesses();
        Task<Business> GetBusiness(int id);
    }
}