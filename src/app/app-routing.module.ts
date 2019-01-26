import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeroesComponent} from './heroes/heroes.component';
import {TodoComponent} from './todo/todo.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {JqueryComponent} from './jquery/jquery.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'jquery', component: JqueryComponent},
  {
    path: 'heroes', component: HeroesComponent, children: [
      {path: ':hero_id', component: HeroDetailComponent},
    ]
  },

  // {path: 'heroes', component: HeroesComponent, children: [
  //     {path: ':hero_id', component: HeroDetailComponent},
  //   ]}, // 전체 유알엘: /heroes/11


  {path: 'todo', component: TodoComponent},


  // {path: 'detail/:hero_id', component: HeroDetailComponent},
  // {path:'' , redirectTo:HomeComponent }
];

// const routes: Routes = [
//   {path: 'home', component: HomeComponent},
//   {path: 'heroes', component: HeroesComponent, children: [
//       {path: ':hero_id', component: HeroDetailComponent},
//     ]}, // 전체 유알엘: /heroes/11
//   {path: 'todo', component: TodoComponent},
//   /*  {path: '', redirectTo: '/home'}*/
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
