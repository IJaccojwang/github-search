import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers'
})
export class FollowersPipe implements PipeTransform {

  transform(value: number) {
    if(value > 0){
      return  value + " follower(s) already";
    }
    else{
      return value + " No followers yet"
    }
  }
}
