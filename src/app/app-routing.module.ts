import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeroesComponent} from './heroes/heroes.component';
import {TodoComponent} from './todo/todo.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'heroes' , component:HeroesComponent},
  {path:'todo' , component:TodoComponent},

  {path: 'detail/:hero_id', component: HeroDetailComponent},
  // {path:'' , redirectTo:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
