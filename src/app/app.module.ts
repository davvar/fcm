import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

var firebaseConfig = {
  apiKey: "AIzaSyBcOcmB3dKc_6YWNgmC0ZfFwuuIYOI5t_Y",
  authDomain: "acoustic-env-269811.firebaseapp.com",
  databaseURL: "https://acoustic-env-269811.firebaseio.com",
  projectId: "acoustic-env-269811",
  storageBucket: "acoustic-env-269811.appspot.com",
  messagingSenderId: "868567145958",
  appId: "1:868567145958:web:c061613e53b9d9a7b9ca27",
  measurementId: "G-S4EJ8LFRTJ",
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseX,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
