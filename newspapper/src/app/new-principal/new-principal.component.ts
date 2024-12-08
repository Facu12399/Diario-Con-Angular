import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-principal',
  standalone: true,
  imports: [],
  templateUrl: './new-principal.component.html',
  styleUrl: './new-principal.component.css'
})
export class NewPrincipalComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() author: string = '';
}
