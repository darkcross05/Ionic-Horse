import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild("map") mapRef: ElementRef;

  constructor(public navCtrl: NavController, public geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    //Location - Let Log
    const location = new google.maps.LatLng(6.1960529, -75.5800563);
    //let location:any;
    //let that = this;

    //Map Options
    const options = {
      center: location,
      zoom: 12,
      streetViewControl: false,
      mapTypeId: 'roadmap'
    };

    //Se agrega el mapa
    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.geolocation.getCurrentPosition().then( (geoposition: Geoposition) => {
      this.addMarker(new google.maps.LatLng(geoposition.coords.latitude, geoposition.coords.longitude), map);
    });
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }

}
