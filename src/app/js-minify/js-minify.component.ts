import { Component } from '@angular/core';
import * as terser from 'terser';

@Component({
  selector: 'app-js-minify',
  templateUrl: './js-minify.component.html',
  styleUrls: ['./js-minify.component.css'],
})
export class JsMinifyComponent {
  jsCode = '';
  minifiedCode = '';

  async minifyCode() {
    try {
      const result = await terser.minify(this.jsCode);
      if (result.code !== undefined) {
        this.minifiedCode = result.code;
      } else {
        this.minifiedCode = 'Error: Invalid JavaScript code';
      }
    } catch (error) {
      console.error('Error while minifying JavaScript:', error);
      this.minifiedCode = 'Error: Invalid JavaScript code';
    }
  }
}
