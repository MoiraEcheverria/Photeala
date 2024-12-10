import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import lottie from 'lottie-web';


@Component({
  selector: 'app-section-08',
  standalone: true,
  imports: [],
  templateUrl: './section-08.component.html',
  styleUrl: './section-08.component.css'
})

export class Section08Component implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;



  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: this.lottieContainer.nativeElement, // Contenedor para la animación
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './animations/banner_photeala.json',
    });
  }
}
console.log(lottie);
