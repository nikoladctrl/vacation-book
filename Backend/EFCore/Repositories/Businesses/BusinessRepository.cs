using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using EFCore.Context;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Repositories.Businesses
{
    public class BusinessRepository : IBusinessRepository
    {
        private readonly DataContext _context;
        public BusinessRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Business> CreateBusiness(Business business)
        {
            _context.Businesses.Add(business);
            await _context.SaveChangesAsync();

            return business;
        }
        
        public async Task<Business> UpdateBusiness(Business business)
        {
            _context.Businesses.Update(business);
            await _context.SaveChangesAsync();

            return business;
        }

        public async Task DeleteBusiness(int id)
        {
            var business = await GetBusiness(id);
            _context.Businesses.Remove(business);
            await _context.SaveChangesAsync();
        }
        public async Task<List<Business>> GetBusinesses()
        {
            return await _context.Businesses.ToListAsync();
        }

        public async Task<Business> GetBusiness(int id)
        {
            return await _context.Businesses.FirstOrDefaultAsync(b => b.Id == id);
        }

    }
}