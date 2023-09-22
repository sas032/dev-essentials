import { Component } from '@angular/core';



@Component({
  selector: 'app-css-minifier',
  templateUrl: './css-minifier.component.html',
  styleUrls: ['./css-minifier.component.css']
})
export class CssMinifierComponent {
  inputCss = '';
  outputCss = '';

  minifyCssAc(css: string): string {
    return css
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '') // Remove comments (// and /* */)
      .replace(/\s+/g, ' ') // Remove extra whitespace
      .trim(); // Trim leading/trailing whitespace
  }

  minifyCss() {
    this.outputCss = this.minifyCssAc(this.inputCss);
  }
}
