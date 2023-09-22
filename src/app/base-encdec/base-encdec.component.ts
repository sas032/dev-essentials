import { Component } from '@angular/core';

@Component({
  selector: 'app-base-encdec',
  templateUrl: './base-encdec.component.html',
  styleUrls: ['./base-encdec.component.css']
})
export class BaseEncdecComponent {
  input: string = '';
  output: string = '';

  encode() {
    this.output = btoa(this.input);
  }

  decode() {
    this.output = atob(this.input);
  }
}
