import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotePipe'
})
export class QuotePipePipe implements PipeTransform {
  transform(value: any): number {
    

    let currentDate = new Date();

    
    let dateDifference = currentDate.getTime() - value.getTime();

    //converting miliseconds into days

    dateDifference=dateDifference /(24*60*60*1000);


    

    return Math.ceil(dateDifference)-1;

  

}
}
