import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers'
})
export class FollowersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
