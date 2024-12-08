import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() title: string = '';

  menuActive: boolean = false; // Estado del menú

  openMenu() {
    this.menuActive = true; // Alterna el estado del menú
  }

  closeMenu() {
    this.menuActive = false;
  }
}
