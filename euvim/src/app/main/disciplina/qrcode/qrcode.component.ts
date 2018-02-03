import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRCodeComponent implements OnInit {

  public urlQrCode;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(data);
  }

  ngOnInit() {
    this.urlQrCode = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=207x207&chl=" + btoa(JSON.stringify(this.data));
  }

}
