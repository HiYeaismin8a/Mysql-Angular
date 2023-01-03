import { AlertController, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
import { Pelicula } from 'src/interfaces/pelicula';
import { PeliculaService } from 'src/services/pelicula-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {
  idDirector: string = '';
  peliculas: Pelicula[] = [];
  pelicula: Pelicula = {
    PKMovies: 0,
    name_movies: '',
    duration: '',
    gender: '',
    FK_idDirector: 0,
    name_Director: '',
  };

  constructor(
    private peliculaService: PeliculaService,
    private modalController: ModalController,
    private alertController: AlertController,
    private router: Router,
  ) {}

  ngOnInit() {
    this.mostrarPeliculas();
  }

  async editarRegistroPelicula(id: number) {
    const modal = await this.modalController.create({
      component: EditarPeliculaComponent,
      componentProps: { id },
      cssClass: 'modalEditarDirector',
    });
    modal.onDidDismiss().then(() => this.mostrarPeliculas());
    return await modal.present();
  }

  async eliminarRegistroPelicula(id: number) {
    const alert = await this.alertController.create({
      header: 'ELIMINAR PELÍCULA',
      subHeader: '¿Seguro de elimnar ésta película?',
      message: '',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.peliculaService.deletePelicula(id).subscribe((valor) => {
              console.log(valor);
              if (valor.errno) {
                this.mostrarAlerta('ERROR', '', '');
                return;
              }
              this.peliculas = this.peliculas.filter(
                (pelicula) => pelicula.PKMovies !== id
              );
            });
          },
        },
        'Cancel',
      ],
    });
    return alert.present();
  }

  async agregarRegistroPelicula() {
    const modal = await this.modalController.create({
      component: EditarPeliculaComponent,
      cssClass: 'modalEditarDirector',
    });
    modal.onDidDismiss().then(() => this.mostrarPeliculas());
    return await modal.present();
  }

  mostrarPeliculas() {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }

  async mostrarAlerta(titulo: string, subtitulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: [{ text: 'OK', handler: () => {} }, 'Cancel'],
    });
    return alert.present();
  }

  regresarListaDirector() {
    this.modalController.dismiss();
  }
}
