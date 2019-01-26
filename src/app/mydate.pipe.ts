import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {
  
  // 새로운 출력
  // value: 파이프 앞의 변수
  // args: mydate: 다음 변수

  transform(value: any, args?: any): any {
    console.log (value , args);
    // return null;
    return (value as string).substr(0,16);
  }

}
