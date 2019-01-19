import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';

import {delay} from 'rxjs/operators';
import {Hero} from './hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes()
  // {
  //   return HEROES;
  // }
  //시간에 따라서 들어올수 있다 스트림 API개념 . 영화볼때를 생각 1건도 처리하고 2건도 하고 다할수 있다. promise는 안됨
  getHeroes(): Observable <Hero[]> {

    return of(HEROES).pipe(delay(1000)); //네트워크 시뮬레이션처럼 할수 있다.
  }
}
