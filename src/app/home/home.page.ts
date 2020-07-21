import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  plu = '';
  barcode = '';
  name = '';
  description = '';
  price = null;
  productnumber = '';

  constructor(
    private barcodeScanner: BarcodeScanner,
    private sqlite: SQLite) {}
  
   scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.matchProduct(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
