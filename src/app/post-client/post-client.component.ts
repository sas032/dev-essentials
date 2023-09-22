import { Component, Inject, OnInit } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-post-client',
  templateUrl: './post-client.component.html',
  styleUrls: ['./post-client.component.css']
})
export class PostClientComponent implements OnInit {
  ngOnInit() {}
  
  constructor(private api: ApiRequestService,
    @Inject(DOCUMENT) private document: Document) {}

  selectedRequestType: string = 'GET';
  endpoint: string = '';
  queryParams: { key: string, value: string }[] = [];
  response: string = '';

  addParam() {
    this.queryParams.push({ key: '', value: '' });
  }

  removeParam(index: number) {
    this.queryParams.splice(index, 1);
  }

  sendRequest(){
    this.response = this.api.sendRequest(this.endpoint, this.queryParams,{},this.selectedRequestType);
  }
  

 
}
