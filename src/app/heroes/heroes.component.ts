import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

import {HeroService} from '../hero.service';
import {element} from 'protractor';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  //1)리터럴 객체로 객체 생성

  // hero:Hero = {
  //   hero_id : 11,
  //   name : 'win'
  // }

  hero: Hero; //형태만
  //heroes = HEROES; //목업이고
  heroes: Hero[];
  //heroes = this.hero;
  selectedHero: Hero;

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
  constructor(private heroService: HeroService, private router: Router) {
    //2 ) new 키워드로 객체 생성11
    this.hero = new Hero(1, 'a');

    // this.hero.name = "wind"
    // console.log(this.hero)

    // 의존적인 코드
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();

    heroService.getHeroes()
      .subscribe(data => { // subscribe 는 Observable로 가입한다는 뜻
        this.heroes = data;
      });

    //1) 가입 자식 컴포넌트가 변경되었다는것을 알기 위해서 subscripbe
    this.heroService.refresh$
      .subscribe(data => {
        console.log(data);
        if (this.heroes) {
          this.selectedHero = this.heroes.find(item => item.hero_id === data);
        }
      });

    //라우트 이벤트
    // this.router.events.subscribe(events => {
    //   if (events instanceof NavigationEnd) {
    //
    //     if (events.url === '/heroes') {
    //       this.selectedHero = null;
    //     }
    //   }
    // });
    // 라우터 이벤트
    this.router.events.subscribe(event => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        if (event.url === '/heroes') {
          this.selectedHero = null;
        }
      }
    });

    // this.router.events.subscribe(events => {
    //   // 부모, 자식 경로가 호출될때마다 여러가지 이벤트 발생. NavigationStart -> NavigationReconized -> NavigationEnd
    //   if (events instanceof NavigationEnd) {
    //     console.log('nagigation start:' + events.url);
    //     if (events.url === '/heroes') {
    //       this.selectedHero = null;
    //     }
    //   }
    // });


  }

  ngOnInit() {
  }

  onSave(e: any) {
    console.log(e);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
