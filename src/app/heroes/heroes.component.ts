import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';


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

  hero : Hero; //형태만
  //heroes = HEROES; //목업이고
  heroes:Hero[];
  //heroes = this.hero;
  selectedHero:Hero;

  isSpecial = true;

  //생성자로 이미 등록된 서비스를 주입받는다 ( DI )
  // constructor(private  heroService:HeroService)
  // {
  //   //2 ) new 키워드로 객체 생성11
  //   this.hero = new Hero(1,'a');
  //
  //   // this.hero.name = "wind"
  //   //console.log(this.hero)
  //
  //   // 의존적인 코드이고 이렇게 쓰는게 아니다
  //   // let heroService = new HeroService()
  //
  // }

  // constructor()
  // {
  //   //2 ) new 키워드로 객체 생성11
  //   this.hero = new Hero(1,'a');
  //
  //   // this.hero.name = "wind"
  //   //console.log(this.hero)
  //
  //   //의존적인 코드
  //   const heroService = new HeroService();
  //   this.heroes = heroService.getHeroes();
  //
  // }

  //생성자로 이미 등록된 서비스를 주입받는다. (DI)
  // constructor(private heroService : HeroService)
  // {
  //   //2 ) new 키워드로 객체 생성11
  //   this.hero = new Hero(1,'a');
  //
  //   // this.hero.name = "wind"
  //   //console.log(this.hero)
  //
  //   //의존적인 코드
  //   //const heroService = new HeroService();
  //   this.heroes = heroService.getHeroes();
  //   //this.selectedHero = = heroService.getHeroes();
  //
  // }

  //생성자로 이미 등록된 서비스를 주입받는다. (DI)
  constructor(private heroService : HeroService)
  {
    //2 ) new 키워드로 객체 생성11
    this.hero = new Hero(1,'a');

    // this.hero.name = "wind"
    //console.log(this.hero)

    //의존적인 코드
    //const heroService = new HeroService();
    //this.heroes = heroService.getHeroes();

    heroService.getHeroes().subscribe(data => { //subscribe 는 Observable로 가입한다는 뜻
        this.heroes = data;
      });



  }

  ngOnInit() {
  }

  onSave(e:any)
  {
    console.log(e);
  }

  onSelect(hero:Hero)
  {
    this.selectedHero = hero;
  }

}
