import { FilterCompany } from '../../../../shared/models/filter-company.model';
import { Pipe, PipeTransform } from '@angular/core';
import { Company } from 'src/app/shared/models/company.model';

@Pipe({
  name: 'filterCompanies'
})
export class FilterCompaniesPipe implements PipeTransform {

  transform(companies: Company[], filterValues: FilterCompany): Company[] {
    
    if (filterValues.name === '' && filterValues.country === '' && filterValues.business === '' && filterValues.address === '') {
      return companies;
    }
    
    let newCompanies = [];
    companies.filter(company => {
      if ((filterValues.name && '' !== filterValues.name && company.name.includes(filterValues.name)) || (filterValues.address && '' !== filterValues.address && company.address.includes(filterValues.address)) || (filterValues.country && '' !== filterValues.country && company.country.includes(filterValues.country)) || (filterValues.business && '' !== filterValues.business && company.business.name.includes(filterValues.business))) {
        newCompanies.push(company);
      }
    });
    return [...newCompanies];
  }

}
