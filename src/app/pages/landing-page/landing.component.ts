import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NgFor, MatButtonModule, MatIconModule, ButtonComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('cardsWrapper', { static: true }) cardsWrapper!: ElementRef<HTMLDivElement>;
  cardWidth = 0;

  experiences = [
    { title: 'Alojamiento', img: 'images/experiences/alojamiento.jpg' },
    { title: 'Actividades de cocina tradicional', img: 'images/experiences/cocinatradicional.jpg' },
    { title: 'Actividades agrícolas', img: 'images/experiences/actividadagricolas.jpg' },
    { title: 'Taller de costura', img: 'images/experiences/tallercostura.jpg' },
    { title: 'Taller de ordeño', img: 'images/experiences/ordeño.jpg' },
    { title: 'Paseo, cuidado y alimentación de los animales', img: 'images/experiences/paseocaballo.jpg' },
    { title: 'Senderismo', img: 'images/experiences/senderismo.jpg' },
    { title: 'Artesanía', img: 'images/experiences/artesania.jpg' },
    { title: 'Visita a los animales', img: 'images/experiences/visitaanimales.jpg' },
    { title: 'Fogatas', img: 'images/experiences/fogatas.jpg' },
    { title: 'Ruta del Queso y Mantequilla Casera', img: 'images/experiences/queso.jpg' },
    { title: 'Tarde de juegos', img: 'images/experiences/juegos.jpg' }
  ];

  // Duplicamos el arreglo para el efecto infinito
  get duplicatedExperiences() {
    return [...this.experiences, ...this.experiences];
  }

  ngAfterViewInit() {
    const card = this.cardsWrapper.nativeElement.querySelector('.card') as HTMLElement;
    if (card) {
      const style = window.getComputedStyle(card);
      const width = card.offsetWidth;
      const marginRight = parseInt(style.marginRight, 10);
      this.cardWidth = width + marginRight;
    }
    this.cardsWrapper.nativeElement.scrollLeft = 0;
  }

  scrollLeft() {
    const container = this.cardsWrapper.nativeElement;
    if (container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 2;
    }
    container.scrollBy({ left: -this.cardWidth, behavior: 'smooth' });
  }

  scrollRight() {
    const container = this.cardsWrapper.nativeElement;
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
    container.scrollBy({ left: this.cardWidth, behavior: 'smooth' });
  }
}
