import { Routes } from '@angular/router';
import { PoliticaComponent } from './politica/politica.component';
import { HomeComponent } from './home/home.component';
import { EconomiaComponent } from './economia/economia.component';
import { EspectaculosComponent } from './espectaculos/espectaculos.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { DeportesComponent } from './deportes/deportes.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'politica', component: PoliticaComponent},
  {path:'politica/:title', component: NewsDetailComponent},
  {path:'economia', component: EconomiaComponent},
  {path:'economia/:title', component: NewsDetailComponent},
  {path:'deportes', component: DeportesComponent},
  {path:'deportes/:title', component: NewsDetailComponent},
  {path:'espectaculos', component: EspectaculosComponent},
  {path:'espectaculos/:title', component: NewsDetailComponent},
  {path:'internacional', component: InternacionalComponent},
  {path:'internacional/:title', component: NewsDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];
