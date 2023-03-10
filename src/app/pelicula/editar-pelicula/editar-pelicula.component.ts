import { AlertController, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

import { Director } from 'src/interfaces/director';
import { DirectorService } from 'src/services/director-service';
import { Pelicula } from 'src/interfaces/pelicula';
import { PeliculaService } from 'src/services/pelicula-service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.scss'],
})
export class EditarPeliculaComponent implements OnInit {
  @Input() id: number = -1;
  directores: Director[] = [];

  pelicula: Pelicula = {
    PKMovies: -1,
    name_movies: '',
    gender: '',
    duration: '',
    FK_idDirector: -1,
    name_Director: '',
  };

  constructor(
    private peliculaService: PeliculaService,
    private modalController: ModalController,
    private directorService: DirectorService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.mostrarDirectores();
    if (this.id === -1) {
      //No se consulta informacón
      return;
    }
    this.pelicula.PKMovies = this.id;
    this.mostrarPelicula();
  }

  mostrarPelicula() {
    this.peliculaService
      .getPelicula(this.id)
      .subscribe((pelicula) => (this.pelicula = pelicula));
  }
  
  mostrarDirectores() {
    this.directorService
      .getDirectores()
      .subscribe((directores) => (this.directores = directores));
  }

  agregarPelicula() {
    if(!this.validaciones()) return;
    this.peliculaService.addPelicula(this.pelicula).subscribe((res) => {
      console.log(res);
      if (res) {
        this.mostrarAlerta(
          'Registro exitoso',
          'Película registrada',
          'La Película se ha registrado correctamente'
        );
        this.cerrar();
      }
    });
  }

  editarPelicula() {
    if(!this.validaciones()) return;
    this.peliculaService
      .updatePelicula(this.pelicula.PKMovies!!, this.pelicula)
      .subscribe((res) => {
        console.log(this.pelicula.PKMovies);
        console.log(res);
        if (res) {
          this.mostrarAlerta(
            'Actualización exitosa',
            'Película Actualizada',
            'La Película se ha actualizado correctamente'
          );
          this.cerrar();
        }
      });
  }

  async mostrarAlerta(titulo: string, subtitulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: ['OK'],
    });
    return alert.present();
  }

  validaciones(): Boolean{
    if(!this.pelicula.name_movies){
      this.mostrarAlerta(
        'Datos vacíos ',
        'Rellene el Nombre de la película',
        ''
      );
      return false;
    }
    if(!this.pelicula.gender){
      this.mostrarAlerta(
        'Datos vacíos ',
        'Rellene el Género de la película',
        ''
      );
      return false;
    }
    if(!this.pelicula.duration){
      this.mostrarAlerta(
        'Datos vacíos ',
        'Rellene la Duración de la película',
        ''
      );
      return false;
    }
    if(!this.pelicula.duration.match(/^\d{1,2}:\d{2}:\d{2}$/)){
      this.mostrarAlerta(
        'Datos Incorrectos ',
        'Rellene ejem: 1:20:30',
        '01:20:30'
      );
      return false;
    }
    if(this.pelicula.FK_idDirector<0){
      this.mostrarAlerta(
        'Datos vacíos ',
        'Seleccione un director para la película',
        ''
      );
      return false;
    }

    return true;
  }

  cerrar() {
    this.modalController.dismiss();
  }
}
