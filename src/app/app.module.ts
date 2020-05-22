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
  apiKey: "AIzaSyDs1mSuA1aEnPDnSMziir_zwFaoJ7nUxKs",
  authDomain: "fcm-test-e3a82.firebaseapp.com",
  databaseURL: "https://fcm-test-e3a82.firebaseio.com",
  projectId: "fcm-test-e3a82",
  storageBucket: "fcm-test-e3a82.appspot.com",
  messagingSenderId: "620503050320",
  appId: "1:620503050320:web:9549eca134dc9ee782c955"
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
