import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscore'
})
export class UnderscorePipe implements PipeTransform {

  transform(value: any): string {
    let newValue: string = "";
    console.log('pipe')
    if (value === "LESS_THAN_ONE") {
      value = "Less than 1 year."
    }
    else if (value === "BETWEEN_ONE_AND_THREE") {
      value = "Between 1 and 3 years."
    }
    else if (value === "BETWEEN_THREE_AND_FIVE"){
      value = "Between 3 and 5 years."
    }
    else {
      value = "More than 5 years."
    }
    return value;
  }

}
