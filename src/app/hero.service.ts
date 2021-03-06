import { Injectable } from '@angular/core';

import {Observable, of, Subject} from 'rxjs';

import {delay} from 'rxjs/operators';
import {Hero} from './hero';
import {element} from 'protractor';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TodoVo} from './domain/todo.vo';
import {ResultVo} from './domain/result.vo';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  refresh = new Subject<number>(); // publisher: next(11) 함수로 데이터 발생

  refresh$ = this.refresh.asObservable(); // subscriber: subscribe()로 데이터 수신


  constructor(private  http: HttpClient) { }

  // getHeroes()
  // {
  //   return HEROES;
  // }

  //시간에 따라서 들어올수 있다 스트림 API개념 . 영화볼때를 생각 1건도 처리하고 2건도 하고 다할수 있다. promise는 안됨
  getHeroes(): Observable <Hero[]> {

    // return of(HEROES).pipe(delay(400)); //네트워크 시뮬레이션처럼 할수 있다.
    return this.http.get<Hero[]>(environment.HOST + '/api/heroes');
  }

  // getHero(hero_id:number):Hero
  // {
  //   HEROES.find(element => element.hero_id === hero_id)
  // }

  // getHero(hero_id: number): Hero {
  //   return HEROES.find(element => element.hero_id === hero_id);
  // }

  getHero(hero_id: number): Observable<Hero> {
    // return of( HEROES.find(element => element.hero_id === hero_id) ).pipe(delay(400)); //네트워크 시뮬레이션처럼 할수 있다.

    // return this.http.get(  environment.HOST + '/api/heroes' +  )

    return this.http.get<Hero>( `${environment.HOST}/api/hero/${hero_id}`   );

  }

  // getHero(hero_id: number): Observable<Hero> {
  //   // return of( HEROES.find(element => element.hero_id === hero_id)).pipe(delay(1000));
  //   // es6 template string : `${자바스크립트변수}`
  //   return this.http.get<Hero>(`${environment.HOST}/api/hero/${hero_id}`);
  // }

  getTodoList()
  {
    return this.http.get<TodoVo[]>(environment.HOST + '/api/todo');
  }

  getPagedTodoList(start_index: number, page_size: number): Observable<ResultVo> {
    return this.http.get<ResultVo>(environment.HOST +
      `/api/paged_todo?start_index=${start_index}&page_size=${page_size}`);
  }

  addTodo( params: any ): Observable<TodoVo>
  {
    // const header = new HttpHeaders();
    // header.append('Content-type', 'application/json'); //앵귤러 버전 4에서는 붙여줘야하는데 버전 업이 되면서 안붙여도 되게 되었다.
    // return this.http.post<TodoVo>(environment.HOST + '/api/todo', params,{headers: header} );

    return this.http.post<TodoVo>(environment.HOST + '/api/todo', params );

  }

  modifyTodo(params: TodoVo): Observable<TodoVo> {
    return this.http.put<TodoVo>(environment.HOST + '/api/todo', params);
  }

  removeTodo(todo_id: number): Observable<ResultVo> {
    return this.http.delete<ResultVo>(`${environment.HOST}/api/todo?todo_id=${todo_id}`);
  }


}
