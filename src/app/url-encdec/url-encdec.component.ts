import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-url-encdec',
  templateUrl: './url-encdec.component.html',
  styleUrls: ['./url-encdec.component.css']
})
export class UrlEncdecComponent {
  input: string = '';
  output: string = '';

  constructor(public notificationSvc: NotificationService) {}


  encode() {
    this.output = encodeURIComponent(this.input);
  }

  decode() {
    this.output = decodeURIComponent(this.input);
  }

  sendError() {
    this.notificationSvc.error('Hello World', 'This is an error :(');
  }
}
