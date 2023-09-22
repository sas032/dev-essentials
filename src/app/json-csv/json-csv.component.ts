import { Component } from '@angular/core';

@Component({
  selector: 'app-json-csv',
  templateUrl: './json-csv.component.html',
  styleUrls: ['./json-csv.component.css']
})
export class JsonCsvComponent {
  
  jsonText: string = '';
  csvText: string = '';

  convertToCsv() {
    try {
      if (this.jsonText) {
        const jsonArray = JSON.parse(this.jsonText);
        this.csvText = this.convertJsonToCsv(jsonArray);
      }
    } catch (error) {
      console.error(error);
    }
  }

  convertToJson() {
    try {
      if (this.csvText) {
        const csvRows = this.csvText.split('\n');
        this.jsonText = this.convertCsvToJson(csvRows);
      }
    } catch (error) {
      console.error(error);
    }
  }

  private convertJsonToCsv(json: any): string {
    const csvRows: string[] = [];

    if (Array.isArray(json)) {
      json.forEach((obj: any) => {
        const row = this.flattenObject(obj);
        csvRows.push(row);
      });
    } else if (typeof json === 'object') {
      const row = this.flattenObject(json);
      csvRows.push(row);
    }

    return csvRows.join('\n');
  }

  private flattenObject(obj: any, prefix: string = ''): string {
    const result: string[] = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (typeof value === 'object' && !Array.isArray(value)) {
          const nestedKeyPrefix = prefix + key + '.';
          const nestedRow = this.flattenObject(value, nestedKeyPrefix);
          result.push(nestedRow);
        } else if (Array.isArray(value)) {
          const arrayRow = this.flattenArray(value, prefix + key);
          result.push(arrayRow);
        } else {
          result.push(`${prefix}${key},${value}`);
        }
      }
    }

    return result.join('\n');
  }

  private flattenArray(array: any[], prefix: string): string {
    const result: string[] = [];

    array.forEach((item: any) => {
      if (typeof item === 'object' && !Array.isArray(item)) {
        const row = this.flattenObject(item, prefix + '[]');
        result.push(row);
      } else if (Array.isArray(item)) {
        const nestedArrayRow = this.flattenArray(item, prefix + '[]');
        result.push(nestedArrayRow);
      } else {
        result.push(`${prefix},${item}`);
      }
    });

    return result.join('\n');
  }

  private convertCsvToJson(csvRows: string[]): string {
    const jsonArray: any[] = [];

    if (csvRows.length > 0) {
      const headers = csvRows[0].split(',');

      for (let i = 1; i < csvRows.length; i++) {
        const values = csvRows[i].split(',');
        const obj: any = {};

        for (let j = 0; j < headers.length; j++) {
          const key = headers[j].trim();
          const value = values[j].trim();
          this.createObject(obj, key, value);
        }

        jsonArray.push(obj);
      }
    }

    return JSON.stringify(jsonArray, null, 2);
  }

  private createObject(obj: any, key: string, value: string) {
    const keyParts = key.split('.');

    for (let i = 0; i < keyParts.length; i++) {
      const currentKey = keyParts[i];
      const isArrayKey = currentKey.endsWith('[]');
      const realKey = isArrayKey ? currentKey.slice(0, -2) : currentKey;

      if (!obj.hasOwnProperty(realKey)) {
        if (i === keyParts.length - 1) {
          obj[realKey] = isArrayKey ? [value] : value;
        } else {
          obj[realKey] = isArrayKey ? [] : {};
        }
      } else if (Array.isArray(obj[realKey])) {
        if (i === keyParts.length - 1) {
          obj[realKey].push(value);
        } else {
          const lastArrayObj = obj[realKey][obj[realKey].length - 1];
          if (typeof lastArrayObj !== 'object') {
            obj[realKey][obj[realKey].length - 1] = {};
          }
        }
      } else if (typeof obj[realKey] === 'object') {
        obj[realKey] = Array.isArray(obj[realKey]) ? [obj[realKey]] : obj[realKey];
        if (i === keyParts.length - 1) {
          obj[realKey].push(value);
        } else {
          const lastObj = obj[realKey][obj[realKey].length - 1];
          if (typeof lastObj !== 'object') {
            obj[realKey][obj[realKey].length - 1] = {};
          }
        }
      } else {
        obj[realKey] = value;
      }

      obj = obj[realKey];
    }
  }  


}
