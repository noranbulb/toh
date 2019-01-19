import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()

    hero:Hero



  constructor(private route:ActivatedRoute) {
    this.route.params
      .subscribe(params => {
        console.log (params)
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

}
