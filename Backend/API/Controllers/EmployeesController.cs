using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLayer.Services.Employees;
using Core.DTOs.Employees;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EmployeesController : BaseApiController
    {
        private readonly IEmployeeService _employeeService;
        public EmployeesController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpPost]
        public async Task<ActionResult<EmployeeDto>> CreateEmployee([FromBody] CreateEmployeeDto createEmployeeDto)
        {
            var employee = await _employeeService.CreateEmployee(createEmployeeDto);

            return (employee == null) ?
                NotFound() :
                Ok(employee);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<EmployeeDto>> UpdateEmployee(int id, [FromBody] UpdateEmployeeDto updateEmployeeDto)
        {
            if (updateEmployeeDto.Id != id) {
                return BadRequest("Ids are not the same!");
            }
            var employee = await _employeeService.UpdateEmployee(updateEmployeeDto);

            return (employee == null) ?
                NotFound() :
                Ok(employee);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            await _employeeService.DeleteEmployee(id);

            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<List<EmployeeDto>>> GetEmployees()
        {
            var employees = await _employeeService.GetEmployees();

            return (employees == null) ?
                NotFound() :
                Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<EmployeeDto>>> GetEmployee(int id)
        {
            var employee = await _employeeService.GetEmployee(id);

            return (employee == null) ?
                NotFound() :
                Ok(employee);
        }

        [HttpGet("{companyId}")]
        public async Task<ActionResult<List<CompanyViewEmployeeDto>>> GetEmployeesByCompanyId(int companyId)
        {
            var employees = await _employeeService.GetEmployeesByCompanyId(companyId);

            return (employees == null) ? 
                NotFound() :
                Ok(employees);
        }
    }
}