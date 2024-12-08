import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerNewsComponent } from '../container-news/container-news.component';
import { NewsComponent, News, newsData } from '../news/news.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-espectaculos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerNewsComponent,
    NewsComponent,
    RouterModule
  ],
  templateUrl: './espectaculos.component.html',
  styleUrl: './espectaculos.component.css'
})
export class EspectaculosComponent {
  newsByCategory: News[] = [];

  ngOnInit(): void {
    this.newsByCategory = newsData.filter(news => news.category === 'espectaculos');
  }

  getNewsLink(news: News): string[] {
    return ['/politica', news.title.replace(/ /g, '-').toLowerCase()];
  }
}
