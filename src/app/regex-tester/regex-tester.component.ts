import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-regex-tester',
  templateUrl: './regex-tester.component.html',
  styleUrls: ['./regex-tester.component.css']
})
export class RegexTesterComponent implements OnInit {

  ngOnInit() {}

  regexPattern: string = '';
  inputText: string = '';
  isValidPattern: boolean = false;
  matches: RegExpMatchArray | null = null;

  ngAfterViewInit() {
    try {
      const regex = new RegExp(this.regexPattern);
      this.isValidPattern = true;
    } catch (error) {
      this.isValidPattern = false;
    }
    
  }
  
  testRegex() {
    try {
      const regex = new RegExp(this.regexPattern);
      this.isValidPattern = true;
      this.matches = this.inputText.match(regex);
    } catch (error) {
      console.error('Invalid regex pattern:', error);
      this.isValidPattern = false;
      this.matches = null;
    }
  }
}
