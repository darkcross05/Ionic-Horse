import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios de consumo URL de php
import { PhpService } from "../../service/php.service";

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  new:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: PhpService) {
  }

  create(){
    this.servicio.agregar(this.new);
  }

}
