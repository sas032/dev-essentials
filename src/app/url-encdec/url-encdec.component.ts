import { Component } from '@angular/core';

@Component({
  selector: 'app-url-encdec',
  templateUrl: './url-encdec.component.html',
  styleUrls: ['./url-encdec.component.css']
})
export class UrlEncdecComponent {
  input: string = '';
  output: string = '';

  encode() {
    this.output = encodeURIComponent(this.input);
  }

  decode() {
    this.output = decodeURIComponent(this.input);
  }
}
