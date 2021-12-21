using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLayer.Services.Businesses;
using Core.DTOs.Businesses;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BusinessesController : BaseApiController
    {
        private readonly IBusinessService _businessService;
        public BusinessesController(IBusinessService businessService)
        {
            _businessService = businessService;
        }

        [HttpPost]
        public async Task<ActionResult<List<BusinessDto>>> CreateBusiness([FromBody] CreateBusinessDto createBusinessDto)
        {
            var business = await _businessService.CreateBusiness(createBusinessDto);

            return (business == null) ? 
                NotFound() :
                Created("Business is successfully created!", business);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<BusinessDto>> UpdateBusiness(int id, [FromBody] UpdateBusinessDto updateBusinessDto)
        {
            if (id != updateBusinessDto.Id) {
                return BadRequest("Ids are not the same!");
            }
            var business = await _businessService.UpdateBusiness(updateBusinessDto);

            return (business == null) ? 
                NotFound() :
                Ok(business);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBusiness(int id)
        {
            await _businessService.DeleteBusiness(id);
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<List<BusinessDto>>> GetBusinesses()
        {
            var businesses = await _businessService.GetBusinesses();

            return (businesses == null) ?
                NotFound() :
                Ok(businesses);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BusinessDto>> GetBusiness(int id)
        {
            var business = await _businessService.GetBusiness(id);

            return (business == null) ?
                NotFound() :
                Ok(business);
        }
    }
}