using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Departments;
using Core.Entities;
using EFCore.Repositories.Departments;

namespace BussinessLayer.Services.Departments
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IDepartmentRepository _departmentRepository;
        private readonly IMapper _mapper;
        public DepartmentService(IDepartmentRepository departmentRepository, IMapper mapper)
        {
            _departmentRepository = departmentRepository;
            _mapper = mapper;
        }

        public async Task<DepartmentDto> CreateDepartment(CreateDepartmentDto createDepartmentDto)
        {
            return _mapper.Map<DepartmentDto>(await _departmentRepository.CreateDepartment(_mapper.Map<Department>(createDepartmentDto)));
        }
        
        public async Task<DepartmentDto> UpdateDepartment(UpdateDepartmentDto updateDepartmentDto)
        {
            var departmentToUpdate = await _departmentRepository.GetDepartment(updateDepartmentDto.Id);
            return _mapper.Map<DepartmentDto>(
                await _departmentRepository.UpdateDepartment(_mapper.Map<UpdateDepartmentDto, Department>(updateDepartmentDto, departmentToUpdate))
            );
        }

        public async Task DeleteDepartment(int id)
        {
            await _departmentRepository.DeleteDepartment(id);
        }
        
        public async Task<List<DepartmentDto>> GetDepartments()
        {
            return _mapper.Map<List<DepartmentDto>>(await _departmentRepository.GetDepartments());
        }

        public async Task<DepartmentDto> GetDepartment(int id)
        {
            return _mapper.Map<DepartmentDto>(await _departmentRepository.GetDepartment(id));
        }

        public async Task<List<DepartmentDto>> GetDepartmentsByCompanyId(int companyId)
        {
            return _mapper.Map<List<DepartmentDto>>(await _departmentRepository.GetDepartmentsByCompanyId(companyId));
        }
    }
}