import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit
{
  
  //1)리터럴 객체로 객체 생성

  // hero:Hero = {
  //   id : 11,
  //   name : 'win'
  // }

  hero:Hero;

  constructor() {
    //2 ) new 키워드로 객체 생성
    this.hero = new Hero();
     this.hero.id = 222
    // this.hero.name = "wind"
    console.log(this.hero)

  }

  ngOnInit() {
  }

}
