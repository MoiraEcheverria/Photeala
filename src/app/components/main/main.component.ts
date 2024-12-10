import { Component } from '@angular/core';
import { Section01Component } from './section-01/section-01.component';
import { Section02Component } from './section-02/section-02.component';
import { Section03Component } from './section-03/section-03.component';
import { Section04Component } from './section-04/section-04.component';
import { Section05Component } from './section-05/section-05.component';
import { Section06Component } from './section-06/section-06.component';
import { Section07Component } from './section-07/section-07.component';
import { Section08Component } from "./section-08/section-08.component";
import { Sections0607Component } from "./sections-06-07/sections-06-07.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    Section01Component,
    Section02Component,
    Section03Component,
    Section04Component,
    Section05Component,
    Section06Component,
    Section07Component,
    Section08Component,
    Sections0607Component
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
