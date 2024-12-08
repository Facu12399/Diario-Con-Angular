import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News, newsData } from '../news/news.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit {
  news: News | undefined;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.news = newsData.find(n => n.title.replace(/ /g, '-').toLowerCase() === title.toLowerCase());
    }
  }
}
