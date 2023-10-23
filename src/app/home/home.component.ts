import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const rssFeedUrl = 'https://www.techradar.com/rss';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  techNews: any[] = [];  

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    // this.techNews = [
    //   {
    //     title: 'Sample News 1',
    //     description: 'Description of sample news 1.',
    //     link: 'https://example.com/news1'
    //   },
    //   {
    //     title: 'Sample News 2',
    //     description: 'Description of sample news 2.',
    //     link: 'https://example.com/news2'
    //   },
    //   {
    //     title: 'Sample News 3',
    //     description: 'Description of sample news 3.',
    //     link: 'https://example.com/news3'
    //   }
    // ];
    // this.getNewsFromRSS();
  }

  getNewsFromRSS() {
    this.http.get(rssFeedUrl, { responseType: 'text' }).subscribe(
      (data) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');

        // Define the RSS feed elements.
        const items = xml.querySelectorAll('item');
        
        items.forEach((item) => {
          const titleElement = item.querySelector('title');
          const descriptionElement = item.querySelector('description');
          const titleLink = item.querySelector('link');
          if (titleElement && descriptionElement && titleLink) {
            const title = titleElement.textContent;
            const description = descriptionElement.textContent;
            const link = titleLink.textContent;

            this.techNews.push({ title, description, link });
          }
        });
        console.log(this.techNews);
      },
      (error) => {
        console.error('Error loading RSS feed:', error);
      }
    );
  }

}
