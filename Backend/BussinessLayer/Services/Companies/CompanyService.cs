using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs;
using Core.DTOs.Companies;
using Core.Entities;
using EFCore.Repositories.Companies;

namespace BussinessLayer.Services.Companies
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IMapper _mapper;
        public CompanyService(ICompanyRepository companyRepository, IMapper mapper)
        {
            _companyRepository = companyRepository;
            _mapper = mapper;
        }

        public async Task<CompanyDto> CreateCompany(CreateCompanyDto createCompanyDto)
        {
            var company = await _companyRepository.CreateCompany(_mapper.Map<Company>(createCompanyDto));

            return _mapper.Map<CompanyDto>(company);
        }

        public async Task<CompanyDto> UpdateCompany(UpdateCompanyDto updateCompanyDto)
        {
            var company = await _companyRepository.GetCompany(updateCompanyDto.Id);

            var companyToUpdate = _mapper.Map<UpdateCompanyDto, Company>(updateCompanyDto, company);

            var updatedCompany = await _companyRepository.UpdateCompany(companyToUpdate);

            return _mapper.Map<CompanyDto>(updatedCompany);
        }
        
        public async Task DeleteCompany(int id)
        {
            await _companyRepository.DeleteCompany(id);
        }

        public async Task<List<CompanyDto>> GetCompanies()
        {
            return _mapper.Map<List<CompanyDto>>(await _companyRepository.GetCompanies());
        }

        public async Task<CompanyDto> GetCompany(int id)
        {
            return _mapper.Map<CompanyDto>(await _companyRepository.GetCompany(id));
        }
    }
}