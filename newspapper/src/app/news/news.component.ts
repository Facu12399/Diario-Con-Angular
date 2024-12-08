import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { console } from 'inspector';


export interface News {
  id: number;
  category: string;
  imageSrc: string;
  title: string;
  author: string;
}

export const newsData: News[] = [
  {id: 1, category: 'politica',
    imageSrc: '../../assets/news/javier-milei.jpg',
    title: 'Javier Milei felicito a Trump por su Victoria para Presidente',
    author: 'Por Facundo Maza'
  },
  {id: 2, category: 'politica',
    imageSrc: '../../assets/news/intercargo-adorni-bullrich-sturzenegger-mogettajpeg.webp',
    title: 'El gobierno desregula el servicio de rampas',
    author: 'Por Mercedes Ninci'
  },
  {id: 3, category: 'economia', imageSrc:"../../assets/news/673693233_224432092_1706x960.webp",
    title:"Bonos en dolares suben y baja el riesgo pais",
    author:"Por Juan Gasalla"
  },
  {id: 4, category: 'deportes',
    imageSrc:"../../assets/news/franco-colapinto-asombra.webp",
    title:"Otro equipo de Fórmula 1 acelera por Franco Colapinto",
    author:"Por Fernando Tornello"
  },
  {id: 5, category: 'economia',
    imageSrc:"../../assets/news/dinero-argentina.jpg",
    title:"La inflacion sigue a la baja y dio 2,7% en el mes de Octubre",
    author:"Por Gustavo Lazzari"
  },
  {id: 6, category: 'economia',
    imageSrc:"../../assets/news/salarios.webp",
    title:"En Octubre los salarios le volvieron a ganar a la inflación",
    author:"Por Mariano Salazar"
  },
  {id: 7, category: 'politica',
    imageSrc:"../../assets/news/milei-2.webp",
    title:'Milei anticipó que si la inflación sigue a la baja reducirá la suba del dólar oficial al 1% mensual',
    author:"Por David Cayon"
  },
  {id: 8, category: 'deportes',
    imageSrc:"../../assets/news/riestra-velez.webp",
    title:"Velez y Riestra empataron y la liga quedo al rojo vivo",
    author:"Por Gringo Cingolani",
  },
  {id: 9, category: 'deportes',
    imageSrc:"../../assets/news/gago-1jpg.webp",
    title:"Gago busca llevar a Boca a su primera victoria de visitante",
    author:"Por Marcelo Sotile"
  },
  {id: 10, category: 'espectaculos',
    imageSrc:"../../assets/news/wanda-nara-l-gantejpg.webp",
    title:'Wanda tras el beso con L-Gante: "Fue un acting"',
    author:"Por Marcela Feudale"
  },
  {id: 11, category: 'espectaculos',
    imageSrc:"../../assets/news/martin-fierro-moda.jpg",
    title:"Se viene el Martín Fierro de la Moda 2024: Conoce los detalles",
    author:"Por Connie Ansaldi"
  },
  {id: 12, category: 'politica',
    imageSrc:"../../assets/news/marcelo-colombo.png",
    title:"El arzobispo de Mendoza, Marcelo Colombo, fue elegido presidente de la Conferencia Episcopal",
    author:"Por Facundo Chaves"
  },
  {id: 13, category: 'politica',
    imageSrc:"../../assets/news/registro-automotor-certificados.webp",
    title:'Una medida de fuerza gremial está frenando la importación de autos y motos',
    author:"Por Horacio Alonso"
  }
];

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  @Input() category: string = '';
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() author: string = '';

  newsData: News[] = []

  newsByCategory: News[] = [];

  ngOnInit(): void {
    this.newsByCategory = this.newsData.filter(news => news.category === this.category);
  }

  getNewsLink(): string[] {
    return [`/${this.category}`, this.title.replace(/ /g, '-').toLowerCase()];
  }
}


