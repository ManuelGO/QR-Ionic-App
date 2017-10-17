import { Component } from '@angular/core';
//componentes:
import { ToastController, Platform } from 'ionic-angular';
//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//servicios:
import { HistorialProvider } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              private _historialService: HistorialProvider){

  }
  scan(){
    console.log("haciendo el scan..");
    if(!this.platform.is('cordova')){
      // this._historialService.agregar_historial('http://google.com');
      // this._historialService.agregar_historial('geo:18.48605749999999,-69.9312117');
//       this._historialService.agregar_historial( `BEGIN:VCARD
// VERSION:2.1
// N:Kent;Clark
// FN:Clark Kent
// ORG:
// TEL;HOME;VOICE:12345
// TEL;TYPE=cell:67890
// ADR;TYPE=work:;;;
// EMAIL:clark@superman.com
// END:VCARD` );
    this._historialService.agregar_historial('MATMSG:TO:manuelarvelo19@gmail.com;SUB:Hola Mundo;BODY:Saludos manuel;;');
      return;
    }

  this.barcodeScanner.scan().then((barcodeData) => {
    console.log("result: ", barcodeData.text);
    console.log("format: ", barcodeData.format);
    console.log("cancelled: ", barcodeData.cancelled);
    let tempVar = barcodeData.cancelled = 0 ? true : false;
    if(tempVar == true && barcodeData.text != null){
      this._historialService.agregar_historial(barcodeData.text);
    }
  }, (err) => {
      console.error("Error: ", err);
      this.mostrar_error('Error: ' + err);
  });
    }

  mostrar_error(mensaje:string){
    let toast = this.toastCtrl.create({
     message: mensaje,
     duration: 2500
   });
   toast.present();
  }

}
