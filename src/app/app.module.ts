import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
  ],
  exports: []
})

export class AppModule { }
