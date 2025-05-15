import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';  // Importa aquí

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NgFor, MatButtonModule, MatIconModule, ButtonComponent], // Agrega aquí
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  @ViewChild('cardsWrapper', { static: true }) cardsWrapper!: ElementRef<HTMLDivElement>;

  experiences = [
    { title: 'Alojamiento', img: 'images/experiences/alojamiento.jpg' },
    { title: 'Actividades de cocina tradicional', img: 'images/experiences/cocinatradicional.jpg' },
    { title: 'Actividades agrícolas', img: 'images/experiences/actividadagricolas.jpg' },
    { title: 'Taller de costura', img: 'images/experiences/tallercostura.jpg' },
    { title: 'Taller de ordeño', img: 'images/experiences/ordeño.jpg' },
  ];

  scrollLeft() {
    this.cardsWrapper.nativeElement.scrollBy({ left: -180, behavior: 'smooth' });
  }

  scrollRight() {
    this.cardsWrapper.nativeElement.scrollBy({ left: 180, behavior: 'smooth' });
  }
}
