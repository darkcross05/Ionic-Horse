import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Servicios de consumo URL de php
import { PhpService } from "../../service/php.service";

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {

  caballos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: PhpService) {
    this.servicio.listar()
      .subscribe(resp => {
        this.caballos = resp;

        if (this.caballos.length > 0) {
          for (let i = 0; i < this.caballos.length; i++) {
            if (this.caballos[i].estado == 1) {
              this.caballos[i].estado = "Activo";
            } else if (this.caballos[i].estado == 0) {
              this.caballos[i].estado = "Inactivo";
            }
          }
        }
      });
  }

  delete(id: any){
    this.servicio.eliminar(id);
  }


}
