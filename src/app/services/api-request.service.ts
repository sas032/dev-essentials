import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }

  response = '';

  sendRequest(endpoint: string, queryParams: any, headerss: any, selectedRequestType: any) {
    const url = endpoint;
    const params = new HttpParams();

    for (const param of queryParams) {
      if (param.key.trim() !== '' && param.value.trim() !== '') {
        params.set(param.key, param.value);
      }
    }

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    let request;

    switch (selectedRequestType) {
      case 'GET':
        request = this.http.get(url, { headers, params });
        break;
      case 'POST':
        request = this.http.post(url, {}, { headers, params });
        break;
      case 'PUT':
        request = this.http.put(url, {}, { headers, params });
        break;
      case 'DELETE':
        request = this.http.delete(url, { headers, params });
        break;
    }

    if (request) {
      request.subscribe(
        (res: any) => {
          this.response = JSON.stringify(res, null, 2);
        },
        (error: any) => {
          this.response = 'An error occurred: ' + error.message;
        }
      );
    }

    return this.response
  }

}
