//Core de Angular
import { Injectable } from '@angular/core';
//Importamos Cliente de consumo HTTP
import { HttpClient } from "@angular/common/http";
//Permitir el mapeo de datos
import 'rxjs/add/operator/map';

//import { HomePage } from '../pages/home/home';

//import { NavController } from 'ionic-angular';

@Injectable()
export class PhpService {
  /**
   * Atributo de clase que guarda un array de usuarios
   */
  caballos: any[] = [];
  //private nav;
  /**
   * Constructor de la clase, realizamos inyección de servicios a utilizar en app.
   * @param http Utilización de cosumo http en la app
   */
  constructor(public http: HttpClient/*, public navCtrl: NavController*/) {
    console.log("Servicio php instanciado correctamente");
    //this.nav = navCtrl;
  }
  /**
   * Ingreso de usuario a las bases de datos, se procede a realizar
   * consumo de serviciomediante URL.
   * @param sUser Usuario para realizar el ingreso de usuario
   * @param sPass Contraseña para realizar ingreso de usuario
   */
  agregar(object: any) {
    let sUrl = `https://danellopez.000webhostapp.com/?metodo=insertar`;
    sUrl += "&identificacion=" + object.identificacion;
    sUrl += "&edad=" + object.edad;

    this.http.get(sUrl).subscribe(resp => {
      let _json: any = JSON.stringify(resp);
      _json = JSON.parse(_json);
      if (_json.estatus == "exito") {
        alert("Success");
        //this.nav.setRoot(HomePage)
      }
    });
  }
  // /**
  //  * Listar usuarios que están en el Back-End, se procede a realizar
  //  * consumo de serviciomediante URL.
  //  */
  listar() {
    const URL = "https://danellopez.000webhostapp.com/?metodo=listar";
    return this.http.get(URL).map((resp: any) => { this.caballos = resp.respuesta; return this.caballos; });
  }
  // /**
  //  * Obtener un usuario desde atributo usuarios
  //  * @param sPos posición del array
  //  */
  get(sidentificacion: string) {
    let URL = "https://danellopez.000webhostapp.com/?metodo=buscar";
    URL += "&id=" + sidentificacion;
    return this.http.get(URL).map((resp: any) => { this.caballos = resp.respuesta; return this.caballos; });
  }
  // /**
  //  * Consumo de la modificación de usuario en uso de http
  //  * @param sId Id de usuario
  //  * @param sUser Usuario
  //  * @param sPass Contraseña
  //  */
  modificar(object: any) {

    let sUrl = "https://danellopez.000webhostapp.com/?metodo=modificar";
    sUrl += "&id=" + object.id;
    sUrl += "&identificacion=" + object.identificacion;
    sUrl += "&edad=" + object.edad;
    sUrl += "&estado=" + object.estado;

    this.http.get(sUrl).subscribe(resp => {
      let _json: any = JSON.stringify(resp);
      _json = JSON.parse(_json);
      if (_json.estatus == "exito") {
          alert("Success")
      } else {
        alert("Verifica los datos a ingresar.");
        alert(_json.mensaje);
      }
    });
  }
  // /**
  //  * Consumo http del método de eliminar
  //  * @param sId Id de usuario
  //  */
  eliminar(sId:string) {
    let sUrl = "https://danellopez.000webhostapp.com/?metodo=eliminar";

    sUrl += "&id=" + sId;

    this.http.get(sUrl).subscribe(resp => {
      let _json: any = JSON.stringify(resp);
      _json = JSON.parse(_json);
      if (_json.estatus == "exito") {
          alert("Success");
      } else {
        alert("Verifica los datos a ingresar.");
        alert(_json.mensaje);
      }
    });
   }
}
