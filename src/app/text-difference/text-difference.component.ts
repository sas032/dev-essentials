import { Component } from '@angular/core';

@Component({
  selector: 'app-text-difference',
  templateUrl: './text-difference.component.html',
  styleUrls: ['./text-difference.component.css']
})
export class TextDifferenceComponent {
  // leftText: string = '';
  // rightText: string = '';
  // diff: string = '';

  // compareTexts() {
  //   const dmp = new DiffMatchPatch();
  //   const diffs = dmp.diff_main(this.leftText, this.rightText);
  //   dmp.diff_cleanupSemantic(diffs);
  //   this.diff = dmp.diff_prettyHtml(diffs);
  // }

  leftText: string = '';
  rightText: string = '';
  diff: string[] = [];

  compareTexts() {
    const leftWords = this.leftText.split(' ');
    const rightWords = this.rightText.split(' ');
    const maxLength = Math.max(leftWords.length, rightWords.length);

    this.diff = [];
    for (let i = 0; i < maxLength; i++) {
      if (leftWords[i] !== rightWords[i]) {
        this.diff.push('diff-word');
      } else {
        this.diff.push('');
      }
    }
  }
}
