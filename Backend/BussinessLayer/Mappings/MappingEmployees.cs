using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.DTOs.Employees;
using Core.Entities;

namespace BussinessLayer.Mappings
{
    public class MappingEmployees : Profile
    {
        public MappingEmployees()
        {
            CreateMap<CreateEmployeeDto, Employee>()
                .ForMember(dest => dest.YearsOfService, opt => opt.MapFrom(src => CountYearsOfService(src.YearsOfService)))
                .ForMember(dest => dest.DaysOfPerYear, opt => opt.MapFrom(src => CountDaysOf(src.YearsOfService)))
                .ForMember(dest => dest.OnVacation, opt => opt.MapFrom(src => IsOnVacation(src.HolidaysStartOn.Value, src.HolidaysEndOn.Value)));
            
            CreateMap<UpdateEmployeeDto, Employee>()
                .ForMember(dest => dest.YearsOfService, opt => opt.MapFrom(src => CountYearsOfService(src.YearsOfService)))
                .ForMember(dest => dest.DaysOfPerYear, opt => opt.MapFrom(src => CountDaysOf(src.YearsOfService)))
                .ForMember(dest => dest.OnVacation, opt => opt.MapFrom(src => IsOnVacation(src.HolidaysStartOn.Value, src.HolidaysEndOn.Value)));
            
            CreateMap<Employee, EmployeeDto>()
                .ForMember(dest => dest.OnVacation, opt => opt.MapFrom(src => IsOnVacation(src.HolidaysStartOn.Value, src.HolidaysEndOn.Value)))
                .ReverseMap();
            
            CreateMap<Employee, CompanyViewEmployeeDto>()
                .ForMember(dest => dest.OnVacation, opt => opt.MapFrom(src => IsOnVacation(src.HolidaysStartOn.Value, src.HolidaysEndOn.Value)))
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.LastName + src.FirstName))
                .ForMember(dest => dest.DaysLeft, opt => opt.MapFrom(src => CountDaysLeft(src)));
        }

        private int CountYearsOfService(int yearsOfService) {
            if (yearsOfService < 1) {
                return 0;
            }
            else if (yearsOfService >= 1 && yearsOfService < 3) {
                return 1;
            }
            else if (yearsOfService >=5 && yearsOfService < 5) {
                return 2;
            }
            return 3;
        }

        private int CountDaysOf(int yearsOfService) {

            if (yearsOfService == 0) {
                return 20;
            }
            else if (yearsOfService == 1) {
                return 25;
            }
            else if (yearsOfService == 2) {
                return 30;
            }
            return 35;
        }

        private bool IsOnVacation(DateTime start, DateTime end) {
            if (start != null && end != null) {
                if (start <= DateTime.Now && end >= DateTime.Now) {
                    return true;
                }
                return false;
            }
            return false;    
        }

        private int CountDaysLeft(Employee employee) {
            
            if (employee.OnVacation && employee.HolidaysStartOn < DateTime.Now && employee.HolidaysEndOn > DateTime.Now) {
                return (employee.HolidaysEndOn - DateTime.Now).Value.Days;
            }
            else if (employee.OnVacation && employee.HolidaysStartOn > DateTime.Now && employee.HolidaysEndOn > DateTime.Now) {
                return employee.DaysOfPerYear;
            }
            return 0;
        }
    }
}