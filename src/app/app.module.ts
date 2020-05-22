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
  apiKey: "AIzaSyCNDJsSFm2pqN-cuvXriV_bNOTimgV_2wU",
  authDomain: "blue-5599e.firebaseapp.com",
  databaseURL: "https://blue-5599e.firebaseio.com",
  projectId: "blue-5599e",
  storageBucket: "blue-5599e.appspot.com",
  messagingSenderId: "390087219274",
  appId: "1:390087219274:web:1645429ca8cfd0b8d9aeb3"
}

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
