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
  @Input() id:number=0;

  director: Director = {
      PK_idDirector :0,
      name_Director: '',
      age: 0,
      active_: 0,
  };
  directores: Director[] = [];
  constructor(
    private directorService: DirectorService,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.director.PK_idDirector = this.id;
    this.mostrarDirectores();
  }
  editarDirector(){
    this.directorService.updateDirector(this.director.PK_idDirector, this.director).subscribe((res)=>{
      console.log(this.director.PK_idDirector);
      console.log(res );
      if(res){
        this.mostrarAlerta(
          'Actualización exitosa',
          'Director Actualizado',
          'El Director se ha actualizado correctamente'
        );
        this.cerrar();
      }
    });
  }

  mostrarDirectores() {
    this.directorService
      .getDirectores()
      .subscribe((directores) => (this.directores = directores));
  }
  agregarDirector(){
    this.directorService.addDirector(this.director).subscribe((res)=>{
     console.log(res);
      if(res){
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

  cerrar(){
    this.modalController.dismiss();
  }
}
