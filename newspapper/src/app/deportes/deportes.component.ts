import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsComponent, News, newsData } from '../news/news.component';
import { ContainerNewsComponent } from '../container-news/container-news.component';

@Component({
  selector: 'app-deportes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NewsComponent,
    ContainerNewsComponent
  ],
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css'
})
export class DeportesComponent implements OnInit {
  newsByCategory: News[] = [];

  ngOnInit(): void {
    this.newsByCategory = newsData.filter(news => news.category === 'deportes');
  }

  getNewsLink(news: News): string[] {
    return ['/politica', news.title.replace(/ /g, '-').toLowerCase()];
  }
}
