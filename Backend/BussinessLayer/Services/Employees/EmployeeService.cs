using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Employees;
using Core.Entities;
using EFCore.Repositories.Employees;

namespace BussinessLayer.Services.Employees
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;
        public EmployeeService(IEmployeeRepository employeeRepository, IMapper mapper)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
        }

        public async Task<EmployeeDto> CreateEmployee(CreateEmployeeDto createEmployeeDto)
        {
            return _mapper.Map<EmployeeDto>(await _employeeRepository.CreateEmployee(_mapper.Map<Employee>(createEmployeeDto)));
        }

        public async Task<EmployeeDto> UpdateEmployee(UpdateEmployeeDto updateEmployeeDto)
        {
            var employeeToUpdate = await _employeeRepository.GetEmployee(updateEmployeeDto.Id);
            return _mapper.Map<EmployeeDto>(await _employeeRepository.UpdateEmployee(_mapper.Map<UpdateEmployeeDto, Employee>(updateEmployeeDto, employeeToUpdate)));
        }

        public async Task DeleteEmployee(int id)
        {
            await _employeeRepository.DeleteEmployee(id);
        }

        public async Task<List<EmployeeDto>> GetEmployees()
        {
            return _mapper.Map<List<EmployeeDto>>(await _employeeRepository.GetEmployees());
        }

        public async Task<EmployeeDto> GetEmployee(int id)
        {
            return _mapper.Map<EmployeeDto>(await _employeeRepository.GetEmployee(id));
        }
    }
}