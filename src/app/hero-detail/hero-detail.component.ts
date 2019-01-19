import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  //@Input()

    hero:Hero


//private route:ActivatedRoute 앵귤러가 만든 서비스
  constructor(private route:ActivatedRoute , private heroService:HeroService ) {
    this.route.params
      .subscribe(params => {
        console.log (111 , params); // {hero_id : 13 } 찍혔다.
        //this.getHero( +params['hero_id']) //+ 는 string을 number로 변화
        this.getHero(+params['hero_id']); // +는 string을 number로 변환

        //2) 변경된 라우팅 정보를 부모에게 publish
        this.heroService.refresh.next( +params['hero_id'] );
    });
  }

  // constructor(private route: ActivatedRoute) {
  //   this.route.params
  //     .subscribe(params => {
  //       console.log(params);
  //     });
  // }

  ngOnInit() {
  }

  // getHero(hero_id:number)
  // {
  //   this.hero =  this.heroService.getHero( hero_id );
  //
  // }

  // getHero(hero_id: number) {
  //   this.hero = this.heroService.getHero(hero_id);
  // }

  // getHero(hero_id: number) {
  //   this.heroService.getHero(+params['hero_id'])
  // }

  getHero(hero_id: number) {
    this.heroService.getHero(hero_id)
      .subscribe(data => this.hero = data);
  }

}
