import { Component, OnInit } from '@angular/core';
import { MarkdownService } from '../services/markdown.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  markdownFiles: any = []; 

  constructor(private router: Router, private http: HttpClient) {}

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
