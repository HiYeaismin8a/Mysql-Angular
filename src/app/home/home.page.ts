import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Director } from '../../interfaces/director';
import { DirectorService } from '../../services/director-service';
import { EditarDirectorComponent } from '../editar-director/editar-director.component';
import { EditarPeliculaComponent } from '../pelicula/editar-pelicula/editar-pelicula.component';
import { Pelicula } from 'src/interfaces/pelicula';
import { PeliculaService } from '../../services/pelicula-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  directores: Director[] = [];
  peliculas: Pelicula[] = [];

  constructor(
    private directorService: DirectorService,
    private alertController: AlertController,
    private modalController: ModalController,
    private router: Router,
    private peliculaService: PeliculaService
  ) {}

  ngOnInit() {
    this.mostrarDirectores();
  }

  async mostrarAlerta(titulo: string, subtitulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: ['OK', 'Cancel'],
    });
    return alert.present();
  }

  mostrarDirectores() {
    this.directorService
      .getDirectores()
      .subscribe((directores) => (this.directores = directores));
  }

  async agregarRegistroDirector() {
    const modal = await this.modalController.create({
      component: EditarDirectorComponent,
      cssClass: 'modalEditarDirector',
    });
    modal.onDidDismiss().then(() => this.mostrarDirectores());
    return await modal.present();
  }

  async editarRegistroDirector(id: number) {
    const modal = await this.modalController.create({
      component: EditarDirectorComponent,
      componentProps: { id },
      cssClass: 'modalEditarDirector',
    });
    modal.onDidDismiss().then(() => this.mostrarDirectores());
    return await modal.present();
  }

  async eliminarRegistroDirector(id: number) {
    const alert = await this.alertController.create({
      header: 'ELIMINAR PELÍCULA',
      subHeader: '¿Seguro de elimnar ésta película?',
      message: '',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.directorService.deleteDirector(id).subscribe((valor) => {
              console.log(valor);
              if (valor.errno) {
                this.mostrarAlerta('ERROR', 'Tiene películas asociadas', 'No puede ser eliminada');
                return;
              }
              this.directores = this.directores.filter(
                (director) => director.PK_idDirector !== id
              );
            });
          },
        },
        'Cancel',
      ],
    });
    return alert.present();
  }

  mostrarPeliculas() {
    this.peliculaService
      .getPeliculas()
      .subscribe((peliculas) => (this.peliculas = peliculas));
  }
}
