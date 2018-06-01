import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreatePage } from '../pages/create/create';
import { DeletePage } from '../pages/delete/delete';
import { MapPage } from '../pages/map/map';
import { ReadPage } from '../pages/read/read';
import { UpdatePage } from '../pages/update/update';

import { AuthService } from '../service/auth.service';

import Auth0Cordova from '@auth0/cordova';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth0: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'List', component: ListPage, icon: 'people' },
      { title: 'Create', component: CreatePage, icon: 'person-add' },
      { title: 'Delete', component: DeletePage, icon: 'trash' },
      { title: 'Map', component: MapPage, icon: 'locate' },
      { title: 'Read', component: ReadPage, icon: 'book' },
      { title: 'Update', component: UpdatePage, icon: 'create' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Add this function
      (<any>window).handleOpenURL = (url) => {
        Auth0Cordova.onRedirectUri(url);
      };

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.auth0.logout();
    this.nav.setRoot(IntroPage);
  }
}
