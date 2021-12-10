using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLayer.Services.Departments;
using Core.DTOs.Departments;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DepartmentsController : BaseApiController
    {
        private readonly IDepartmentService _departmentService;
        public DepartmentsController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }


        [HttpPost]
        public async Task<ActionResult<DepartmentDto>> CreateDepartment([FromBody] CreateDepartmentDto createDepartmentDto)
        {
            var department = await _departmentService.CreateDepartment(createDepartmentDto);

            return (department == null) ?
                NotFound() :
                Created("", department);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<DepartmentDto>> UpdateDepartmentDto(int id, [FromBody] UpdateDepartmentDto updateDepartmentDto)
        {
            if (id != updateDepartmentDto.Id) {
                return BadRequest("Ids are not the same!");
            }

            var department = await _departmentService.UpdateDepartment(updateDepartmentDto);

            return (department == null) ?
                NotFound() :
                Ok(department);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteDepartment(int id)
        {
            await _departmentService.DeleteDepartment(id);

            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<List<DepartmentDto>>> GetDepartments()
        {
            var departments = await _departmentService.GetDepartments();

            return (departments == null) ?
                NotFound() :
                Ok(departments);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<List<DepartmentDto>>> GetDepartment(int id)
        {
            var department = await _departmentService.GetDepartment(id);

            return (department == null) ?
                NotFound() :
                Ok(department);
        }
    }
}