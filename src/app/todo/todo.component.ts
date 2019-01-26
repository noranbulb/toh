import { Component, OnInit } from '@angular/core';
import {TodoVo} from '../domain/todo.vo';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // 1.REST api 테스터
  // 2.테스트결과 확인후 객체 정의
  // 3.서비스에서 호출 함수 생성
  // 4.뷰에서 모델 생성
  // 5.뷰 바인딩

  todoList: TodoVo[];
  //newTodo: TodoVo; // 할일 추가하기 위한 모델

  newTodo = new TodoVo(); // 할일 추가하기 위한 모델
  
  //di를 주입 받다
  constructor(private  heroService: HeroService ) { }

  ngOnInit() {
    this.heroService.getTodoList()
      .subscribe(data => {
        console.log('getTodoList', data);
        this.todoList = data;
      });

    
  }

  // getTodoList() {
  //   this.heroService.getTodoList()
  //     .subscribe(body => {
  //       console.log('getTodoList', body);
  //       this.todoList = body;
  //     });
  // }

}
