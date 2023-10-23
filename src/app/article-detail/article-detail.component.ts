// article-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from '../services/markdown.service';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  
  filename: any;
  markdownContent: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Get the filename from route parameters
    this.route.params.subscribe((params: any) => {
      this.filename = params.name;
      
      this.http.get(`/assets/markdown/${this.filename}.md`, { responseType: 'text' }).subscribe((content) => {
        this.markdownContent = marked.parse(content);
      });
    });
  }
}
