import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PixelartComponent } from './pixelart/pixelart.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [						
    AppComponent,
      AboutComponent,
      HomeComponent,
      NavbarComponent,
      FooterComponent,
      PixelartComponent,
      ModelsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
