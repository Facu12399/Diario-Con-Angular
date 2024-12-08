import { Component, OnInit } from '@angular/core';
import { ContainerNewsComponent } from '../container-news/container-news.component';
import { NewPrincipalComponent } from '../new-principal/new-principal.component';
import { NewsComponent } from '../news/news.component';
import { CommonModule } from '@angular/common';
import { News, newsData } from '../news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerNewsComponent,
    NewPrincipalComponent,
    NewsComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  newsByCategory: News[] = [];

  ngOnInit(): void {
    this.newsByCategory = newsData;
  }
}


