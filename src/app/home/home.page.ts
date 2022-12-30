import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { Director } from '../../interfaces/director';
import { DirectorService } from '../../services/director-service';
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
    private router: Router,
  ) {}
  
  ngOnInit() {
    this.directorService.getDirectores().subscribe(directores => {
      this.directores = directores;
      console.log(directores);
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

  mostrarDirectores() {
    this.directorService.getDirectores().subscribe((directores)=> this.directores = directores);
  }
  mostrarDirector(){
    this.directorService.getDirector('id').forEach((director) => {
      this.directores = director;
    });
  }
}
