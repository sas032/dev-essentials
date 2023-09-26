import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']
})
export class JsonFormatterComponent {
  constructor(public notificationSvc: NotificationService) {}
  
  
  formatter: string = 'json';
  input: string = '';
  formattedOutput: string = '';
  placeholder: string = 'Enter JSON here';

  sendError(err: string){
    this.notificationSvc.error('Hello World', err);
  }

  setFormatter(formatter: string) {
    this.formatter = formatter;
    this.input = '';
    this.formattedOutput = '';
    this.setPlaceholder();
  }

  format() {
    try {
      if (this.formatter === 'json') {
        const parsedJson = JSON.parse(this.input);
        this.input = JSON.stringify(parsedJson, null, 2);
        this.formattedOutput = '';
      } else if (this.formatter === 'xml') {
        console.log("hi")
        const formattedXml = this.formatXml(this.input);
        this.input = formattedXml;
        this.formattedOutput = '';
      } else {
        this.formattedOutput = 'Invalid formatter!';
      }
    } catch (error) {
      this.formattedOutput = 'Invalid ' + this.formatter.toUpperCase() + '!';
      this.sendError("Invalid "+ this.formatter.toUpperCase())
    }
  }

  setPlaceholder() {
    if (this.formatter === 'json') {
      this.placeholder = 'Enter JSON here';
    } else if (this.formatter === 'xml') {
      this.placeholder = 'Enter XML here';
    }
  }

  formatXml(xml: string): string {
    const xmlDoc = this.parseXml(xml);
    if (xmlDoc) {
      const serializer = new XMLSerializer();
      const formattedXml = serializer.serializeToString(xmlDoc);
      return formattedXml;
    } else {
      this.sendError("Invalid XML")
      return '';
    }
  }

  parseXml(xml: string): Document | null {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
      return null;
    }
    return xmlDoc;
  }

}
