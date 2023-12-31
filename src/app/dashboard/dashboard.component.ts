import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router, private http: HttpClient) {}

  isRootPath(): boolean {
    return this.router.url === '/';
  }

  markdownFiles: any = []; 

  ngOnInit(): void {
    this.http.get<string[]>('/assets/markdown/files-list.json').subscribe((data:any) => {
      // data.forEach((it:any) => {
      //   this.markdownFiles.push(it.name);
      // })
      this.markdownFiles = data;
      // console.log( this.markdownFiles);
    });
  }

  openArticle(filename: string): void {
    this.router.navigate(['/article', filename]);
  }

}
