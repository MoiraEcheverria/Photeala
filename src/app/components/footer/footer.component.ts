import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { PrivacyComponent } from './privacy/privacy.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    PrivacyComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
