import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';


const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'news'},
  {path:'news', component: NewsComponent},
  {path:'add-news', component: AddNewsComponent},
  {path:'**',  redirectTo:'news'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
