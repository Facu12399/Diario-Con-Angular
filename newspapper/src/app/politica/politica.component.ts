import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { News, NewsComponent, newsData } from '../news/news.component'
import { ContainerNewsComponent } from "../container-news/container-news.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-politica',
  standalone: true,
  imports: [
    RouterModule,
    NewsComponent,
    ContainerNewsComponent,
    CommonModule
],
  templateUrl: './politica.component.html',
  styleUrl: './politica.component.css'
})
export class PoliticaComponent implements OnInit {
  newsByCategory: News[] = [];

  ngOnInit(): void {
    this.newsByCategory = newsData.filter(news => news.category === 'politica');
  }

  getNewsLink(news: News): string[] {
    return ['/politica', news.title.replace(/ /g, '-').toLowerCase()];
  }
}
