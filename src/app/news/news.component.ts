import { Component, OnInit } from '@angular/core';
import { SNewsService } from '../services/s-news.service';
// import { New } from '../models/new';
import { CommonModule } from '@angular/common';
import { FireNewsService } from '../services/fire-news.service';
import NewI from '../models/newsI';

@Component({
  standalone:true,
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.sass',
  imports: [CommonModule]
})
export class NewsComponent implements OnInit{

  newsToDisplay: NewI[];
  constructor(
    // private newsService: SNewsService,
    private fireNewsService: FireNewsService,
  ){}

  ngOnInit(): void {
    //this.newsToDisplay = this.newsService.getNews();
    this.fireNewsService.getNews().subscribe(news =>{
      this.newsToDisplay = news;
    })
  }

  // deleteNew(index: number){
  //   this.newsService.deleteNews(index);
  // }
  deleteNew(id: string){
    this.fireNewsService.deleteNews(id);
  }

}
