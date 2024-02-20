import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PixelartComponent } from './pixelart/pixelart.component';
import { ModelsComponent } from './models/models.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pixelart', component: PixelartComponent },
  { path: '3d-models', component: ModelsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
