import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Servicios de consumo URL de php
import { PhpService } from "../../service/php.service";

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  flag:boolean = false;

  change:any = {};
  caballo: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: PhpService) {
  }

  onInput(myInput:any){
    this.servicio.get(myInput).subscribe(resp => {
      this.caballo = resp;
    });
    this.change = this.caballo[0];

    this.flag = true;
  }

  edit(){
    if (this.change.estado == "activo") {
      this.change.estado = "Activo";
    } else if (this.change.estado == "inactivo") {
      this.change.estado = "Inactivo";
    }
    this.servicio.modificar(this.change);
  }

}
