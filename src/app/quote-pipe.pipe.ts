import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotePipe'
})
export class QuotePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
