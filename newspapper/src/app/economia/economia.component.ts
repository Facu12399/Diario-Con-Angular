import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsComponent, newsData, News } from '../news/news.component';
import { ContainerNewsComponent } from '../container-news/container-news.component';

@Component({
  selector: 'app-economia',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NewsComponent,
    ContainerNewsComponent,
  ],
  templateUrl: './economia.component.html',
  styleUrl: './economia.component.css'
})
export class EconomiaComponent implements OnInit {
  newsByCategory: News[] = [];

  ngOnInit(): void {
    this.newsByCategory = newsData.filter(news => news.category === 'economia');
  }

  getNewsLink(news: News): string[] {
    return ['/politica', news.title.replace(/ /g, '-').toLowerCase()];
  }
}
