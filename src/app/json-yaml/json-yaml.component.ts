import { Component } from '@angular/core';

@Component({
  selector: 'app-json-yaml',
  templateUrl: './json-yaml.component.html',
  styleUrls: ['./json-yaml.component.css']
})
export class JsonYamlComponent {
  // jsonText: string = '';
  // yamlText: string = '';

  // onInputChange(event: Event) {
  //   const inputElement = event.target as HTMLTextAreaElement;
  //   this.jsonText = inputElement.value;
  //   this.convertJsonToYaml();
  // }

  // convertJsonToYaml() {
  //   try {
  //     const jsonObject = JSON.parse(this.jsonText);
  //     this.yamlText = this.traverseObject(jsonObject);
  //   } catch (error) {
  //     this.yamlText = 'Invalid JSON';
  //   }
  // }

  // private traverseObject(obj: any, indent: number = 0): string {
  //   let yaml = '';
  //   const indentSpaces = ' '.repeat(indent * 2);

  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       const value = obj[key];

  //       if (typeof value === 'object' && !Array.isArray(value)) {
  //         yaml += `${indentSpaces}${key}:\n${this.traverseObject(value, indent + 1)}`;
  //       } else if (Array.isArray(value)) {
  //         yaml += `${indentSpaces}${key}:\n${this.traverseArray(value, indent + 1)}`;
  //       } else {
  //         yaml += `${indentSpaces}${key}: ${value}\n`;
  //       }
  //     }
  //   }

  //   return yaml;

  jsonText: string = '';
  yamlText: string = '';

  convert() {
    try {
      if (this.jsonText) {
        const jsonObject = JSON.parse(this.jsonText);
        this.yamlText = this.convertObjectToYaml(jsonObject);
      } else if (this.yamlText) {
        const yamlObject = this.convertYamlToObject(this.yamlText);
        this.jsonText = JSON.stringify(yamlObject, null, 2);
      }
    } catch (error) {
      console.error(error);
    }
  }

  private convertObjectToYaml(object: any): string {
    const lines: string[] = [];

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];

        if (typeof value === 'object' && value !== null) {
          const nestedYaml = this.convertObjectToYaml(value);
          lines.push(`${key}:`);
          lines.push(this.indentYaml(nestedYaml));
        } else {
          lines.push(`${key}: ${value}`);
        }
      }
    }

    return lines.join('\n');
  }

  private convertYamlToObject(yaml: string): any {
    const lines = yaml.split('\n');
    const result: any = {};

    let currentIndentLevel = -1;
    let currentObject = result;

    for (const line of lines) {
      const [key, value] = line.split(':');

      const indentLevel = this.getIndentLevel(line);
      const keyTrimmed = key.trim();

      if (indentLevel > currentIndentLevel) {
        currentObject[keyTrimmed] = {};
        currentObject = currentObject[keyTrimmed];
        currentIndentLevel = indentLevel;
      } else if (indentLevel === currentIndentLevel) {
        currentObject[keyTrimmed] = value ? value.trim() : {};
      } else {
        let parentObject = result;
        for (let i = 0; i < indentLevel; i++) {
          parentObject = parentObject[keyTrimmed];
        }
        parentObject[keyTrimmed] = value ? value.trim() : {};
        currentObject = parentObject;
        currentIndentLevel = indentLevel;
      }
    }

    return result;
  }

  private getIndentLevel(line: string): number {
    const leadingSpaces = line.match(/^\s*/);
    return leadingSpaces ? leadingSpaces[0].length : 0;
  }

  private indentYaml(yaml: string): string {
    const lines = yaml.split('\n');
    return lines.map(line => `  ${line}`).join('\n');
  }
}
