import { Component, OnInit } from '@angular/core';
import { SNewsService } from '../services/s-news.service';
import { New } from '../models/new';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.sass',
  imports: [CommonModule]
})
export class NewsComponent implements OnInit{

  newsToDisplay: New[];
  constructor(
    private newsService: SNewsService,
  ){}

  ngOnInit(): void {
    this.newsToDisplay = this.newsService.getNews();
  }

}
