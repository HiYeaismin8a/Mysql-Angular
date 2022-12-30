import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Director } from '../../interfaces/director';
import { DirectorService } from '../../services/director-service';
import { EditarDirectorComponent } from '../editar-director/editar-director.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  directores: Director[] = [];
  constructor(
    private directorService: DirectorService,
    private alertController: AlertController,
    private modalController: ModalController,
    private router: Router
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
  mostrarDirector() {
    this.directorService.getDirector('name_Director').forEach((director) => {
      this.directores = director;
    });
  }

  editarDirector() {
    
  }

  eliminarRegistroDirector(id: number) {
    this.mostrarAlerta('ESPERA', '¿Está seguro de ELIMINAR al Director', '');
    this.directorService.deleteDirector(id).subscribe((valor) => {
      console.log(valor);
      if (valor.errno) {
        this.mostrarAlerta('ERROR', '', '');
        return;
      }
      this.directores = this.directores.filter(
        (director) => director.PK_idDirector !== id
      );
    });
  }

  async abrirRegistroDirector() {
    const modal = await this.modalController.create({
      component: EditarDirectorComponent,
      cssClass: 'modalEditarDirector',
    });
    return await modal.present();
  }
}
