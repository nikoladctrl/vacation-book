using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Businesses;
using Core.Entities;
using EFCore.Repositories.Businesses;

namespace BussinessLayer.Services.Businesses
{
    public class BusinessService : IBusinessService
    {
        private readonly IMapper _mapper;
        private readonly IBusinessRepository _businessRepository;
        public BusinessService(IBusinessRepository businessRepository, IMapper mapper)
        {
            _businessRepository = businessRepository;
            _mapper = mapper;
        }

        public async Task<BusinessDto> CreateBusiness(CreateBusinessDto createBusinessDto)
        {
            var business = _mapper.Map<CreateBusinessDto, Business>(createBusinessDto);
            return _mapper.Map<BusinessDto>(await _businessRepository.CreateBusiness(business));
        }

        public async Task<BusinessDto> UpdateBusiness(UpdateBusinessDto updateBusinessDto)
        {
            return _mapper.Map<BusinessDto>(await _businessRepository.UpdateBusiness(_mapper.Map<Business>(updateBusinessDto)));
        }
        
        public async Task DeleteBusiness(int id)
        {
            await _businessRepository.DeleteBusiness(id);
        }

        public async Task<List<BusinessDto>> GetBusinesses()
        {
            return _mapper.Map<List<BusinessDto>>(await _businessRepository.GetBusinesses());
        }

        public async Task<BusinessDto> GetBusiness(int id)
        {
            return _mapper.Map<BusinessDto>(await _businessRepository.GetBusiness(id));
        }
    }
}