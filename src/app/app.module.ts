import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';


import { MyApp } from './app.component';
import { HomePage, TabsPage, MapaPage, GuardadosPage } from '../pages/index.paginas';
import { HistorialProvider } from '../providers/historial/historial';

//Mapas:
import { AgmCoreModule } from '@agm/core';
//contactos:
import { Contacts } from '@ionic-native/contacts';
//email:
import { EmailComposer } from '@ionic-native/email-composer';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MapaPage,
    GuardadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8w2ea1stRG-sP_X412VJYTzBjj3tDfJM'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MapaPage,
    GuardadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider,
    InAppBrowser,
    Contacts,
    EmailComposer
  ]
})
export class AppModule {}
