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
  // newTodo: TodoVo; // 할일 추가하기 위한 모델

  newTodo = new TodoVo(); // 할일 추가하기 위한 모델

  tempMap = new Map<number, TodoVo>();

  
  // di를 주입 받다 ;

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

  addTodo() {
    // body에 데이터를 보낼때, stringify를 해야 하나? 답 : 안해도 된다.
    // this.newTodo가 request의 body로 날라가는데, todo  속성외ㅏ에 나머지 속성은 어떻게 되는가?

    // content-type을 명시해야 하나?

    this.heroService.addTodo(this.newTodo)
      .subscribe(data => {
        console.log(data);

        // 입력폼 초기화
        this.newTodo = new TodoVo();
        // 추가된 데이터 맨위로 올려서 뷰 갱신
        this.todoList.unshift(data);
        this.newTodo.todo = null;

      });
  }

  save(item: TodoVo) {
    item.isEdited = true;
    // 기존 데이터를 저장
    //this.tempMap.set(item.todo_id , item);

    //쉘로카피 디카피에 대한 것을 알아야한다
    //홈페이지에 있는 부분보다 지금이 더 깔끔
    this.tempMap.set(item.todo_id , {...item});
  }

  // 취소
  restore(todo: TodoVo) {

    todo.isEdited = false;

    const tempTodo = this.tempMap.get(todo.todo_id); // 쉘로 카피를 해서 동작을 안함. 메모리라는것을 알아야함

    todo.todo = tempTodo.todo;
  }

  modify(todo: TodoVo) {
    this.heroService.modifyTodo(todo)
      .subscribe(data => {
        Object.assign( todo , data );

        //스프레드 로 변경한다면 하다가 만다
        //{...todo, ...}
        


        //일반템플릿으로 변경
        todo.isEdited = false;
      });

  }

  remove(todo: TodoVo)
  {
    console.log(222 , todo);
    
    if( confirm('삭제하시겠니까?') ) {

        this.heroService.removeTodo( todo.todo_id ).subscribe(data => {
          if ( data.result === 0 ) {

            // 데이터에서 삭제
            // 1) index 찾기
            const index = this.todoList.findIndex(item => item.todo_id === todo.todo_id);

            // 2) splice 로 삭제하기
            this.todoList.splice(index, 1);

            // 삭제 메시지 보여주기

            // let index = this.todoList.findIndex(data => {
            //   return todo.todo_id === data.todo_id ? true : false;
            // });
            // this.todoList.splice(index, 1);
          }
        });

    }
  }



}
