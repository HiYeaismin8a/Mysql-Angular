import { Component, Input, OnInit } from '@angular/core';

import { Director } from '../../interfaces/director';
import { DirectorService } from './../../services/director-service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-director',
  templateUrl: './editar-director.component.html',
  styleUrls: ['./editar-director.component.scss'],
})
export class EditarDirectorComponent implements OnInit {
  
  directores: Director = {
      PK_idDirector: 0,
      name_Director: '',
      age: 0,
      active_: 0,
  };

  constructor(
    private directorService: DirectorService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  // mostrarDirector(){
  //   this.directorService.getDirector('name_Director').forEach((director) => {
  //     this.directores = director;
  //   });
  // }

  cerrar() {
    this.modalController.dismiss();
  }
}
