
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import lottie from 'lottie-web';

// Importar animación JSON
import animationData from '../../../../../public/animations/photeala_hero.json';

@Component({
  selector: 'app-section-01',
  standalone: true,
  imports: [],
  templateUrl: './section-01.component.html',
  styleUrls: ['./section-01.component.css'],
})
export class Section01Component implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  ngAfterViewInit(): void {
    // Procesar la animación antes de cargarla
    const trimmedAnimation = this.trimAnimation(animationData);

    // Cargar animación en el contenedor
    lottie.loadAnimation({
      container: this.lottieContainer.nativeElement, // Contenedor para la animación
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: trimmedAnimation, // Animación modificada
    });
  }

  // Recortar el margen vacío
  private trimAnimation(animation: any): any {
    const marginLeft = 200;
    const marginTop = 50;

    // Reducir el ancho del canvas
    animation.w -= marginLeft;
    animation.h -= marginTop;

    // Mover las capas
    animation.layers.forEach((layer: any) => {
      if (layer.ks && layer.ks.p && layer.ks.p.k) {
        // Ajustar la posición X
        layer.ks.p.k[0] -= marginLeft;
        // Ajustar la posición Y (hacia arriba)
        layer.ks.p.k[1] -= marginTop;
      }
    });

    return animation;
  }
}
