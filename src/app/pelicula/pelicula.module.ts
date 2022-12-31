import { CommonModule } from '@angular/common';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PeliculaPage } from './pelicula.page';
import { PeliculaPageRoutingModule } from './pelicula-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculaPageRoutingModule
  ],
  declarations: [PeliculaPage,EditarPeliculaComponent]
})
export class PeliculaPageModule {}
