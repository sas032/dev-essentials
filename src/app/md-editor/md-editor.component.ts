import { Component } from '@angular/core';

@Component({
  selector: 'app-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.css']
})
export class MdEditorComponent {
  markdownText: string = '';

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLTextAreaElement;
    this.markdownText = inputElement.value;
  }

  getHtmlOutput(): string {
    return this.convertMarkdownToHtml(this.markdownText);
  }

  private convertMarkdownToHtml(markdown: string): string {
    // Convert Markdown to HTML
    let html = markdown;

    // Replace Markdown syntax with HTML tags
    html = this.replaceHeaderTags(html);
    html = this.replaceEmphasisTags(html);
    html = this.replaceLinkTags(html);
    // Add more conversion rules as needed

    // Wrap the resulting HTML in a <div>
    html = `<div>${html}</div>`;

    return html;
  }

  private replaceHeaderTags(html: string): string {
    // Replace '#' headers with <h1> - <h6> tags
    return html.replace(/#(.+?)\n/g, (_match, content) => {
      const level = content.trim().length;
      return `<h${level}>${content.trim()}</h${level}>`;
    });
  }

  private replaceEmphasisTags(html: string): string {
    // Replace '*' or '_' emphasis tags with <em> tags
    return html.replace(/(\*|_)(.+?)\1/g, (_match, _tag, content) => {
      return `<em>${content}</em>`;
    });
  }

  private replaceLinkTags(html: string): string {
    // Replace '[link text](url)' link tags with <a> tags
    return html.replace(/\[(.+?)\]\((.+?)\)/g, (_match, text, url) => {
      return `<a href="${url}">${text}</a>`;
    });
  }
}
