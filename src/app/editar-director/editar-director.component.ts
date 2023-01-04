import { AlertController, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

import { Director } from '../../interfaces/director';
import { DirectorService } from './../../services/director-service';

@Component({
  selector: 'app-editar-director',
  templateUrl: './editar-director.component.html',
  styleUrls: ['./editar-director.component.scss'],
})
export class EditarDirectorComponent implements OnInit {
  @Input() id: number = -1;

  director: Director = {
    PK_idDirector: -1,
    name_Director: '',
    age: 0,
    active_: 0,
  };

  constructor(
    private directorService: DirectorService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    if (this.id === -1) {
      //No se consulta informacón
      return;
    }

    this.director.PK_idDirector = this.id;
    this.mostrarDirector();
  }

  editarDirector() {
    if(!this.validaciones()) return;
    this.directorService
      .updateDirector(this.director.PK_idDirector!!, this.director)
      .subscribe((res) => {
        console.log(this.director.PK_idDirector);
        console.log(res);
        if (res) {
          this.mostrarAlerta(
            'Actualización exitosa',
            'Director Actualizado',
            'El Director se ha actualizado correctamente'
          );
          this.cerrar();
        }
      });
  }

  mostrarDirector() {
    this.directorService
      .getDirector(this.id)
      .subscribe((director) => (this.director = director));
  }

  agregarDirector() {
    if(!this.validaciones()) return;
    this.directorService.addDirector(this.director).subscribe((res) => {
      console.log(res);
      if (res) {
        this.mostrarAlerta(
          'Registro exitoso',
          'Director registrado',
          'El Director se ha registrado correctamente'
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

  validaciones():Boolean{
    if(!this.director.name_Director){
      this.mostrarAlerta(
        'Datos vacíos ',
        'Rellene el Nombre del Director',
        ''
      );
      return false;
    }
    if(this.director.age<=8){
      this.mostrarAlerta(
        'Datos vacíos ',
        'Rellene la correctamente la Edad del Director',
        ''
      );
      return false;
  }
  if(this.director.active_ <0 || this.director.active_ >1){
    this.mostrarAlerta(
      'Datos vacíos ',
      'Rellene si es activo o no el Director',
      '1 o 0'
    );
    return false;
  }

  return true;
}

  cerrar() {
    this.modalController.dismiss();
  }
}
