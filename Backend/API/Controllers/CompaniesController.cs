using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLayer.Services.Companies;
using Core.DTOs;
using Core.DTOs.Companies;
using Core.DTOs.Departments;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CompaniesController : BaseApiController
    {
        private readonly ICompanyService _companyService;
        public CompaniesController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpPost]
        public async Task<ActionResult<CompanyDto>> CreateCompany([FromBody] CreateCompanyDto createCompanyDto)
        {
            var company = await _companyService.CreateCompany(createCompanyDto);

            return (company == null) ?
                NotFound() :
                Created("Company is successfully created!", company);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CompanyDto>> UpdateCompany(int id, [FromBody] UpdateCompanyDto updateCompanyDto)
        {
            if (id != updateCompanyDto.Id) {
                return BadRequest("Ids are not the same!");
            }

            var company = await _companyService.UpdateCompany(updateCompanyDto);

            return (company == null) ?
                NotFound() :
                Ok(company);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCompany(int id)
        {
            await _companyService.DeleteCompany(id);

            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<List<CompanyDto>>> GetCompanies()
        {
            var companies = await _companyService.GetCompanies();

            return (companies == null) ?
                NotFound() :
                Ok(companies);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<CompanyDto>>> GetCompany(int id)
        {
            var company = await _companyService.GetCompany(id);

            return (company == null) ?
                NotFound() :
                Ok(company);
        }

        [HttpPut("{id}/new-department")]
        public async Task<ActionResult<CompanyDto>> CreateCompanyDepartment(int id, CreateDepartmentDto createDepartmentDto) 
        {
            if (id != createDepartmentDto.CompanyId) {
                return BadRequest("Ids are not the same!");
            }

            var returnedCompany = await _companyService.GetCompany(createDepartmentDto.CompanyId);

            if (returnedCompany == null) {
                return BadRequest("Company doesn't exist!");
            }

            var company = await _companyService.CreateCompanyDepartment(createDepartmentDto);

            return (company == null) ?
                NotFound() :
                Ok(company);

        }
    }
}