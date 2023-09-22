import { Component } from '@angular/core';
// import * as SQL from 'sql.js';

declare const SQL: any;

@Component({
  selector: 'app-sqlite-viewer',
  templateUrl: './sqlite-viewer.component.html',
  styleUrls: ['./sqlite-viewer.component.css']
})

export class SqliteViewerComponent {
  // data: any[] = [];
  // columns: string[] = [];

  // handleFile(event: any) {
  //   const file = event.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const dbContent = e.target.result;
  //       this.parseDbContent(dbContent);
  //     };
  //     reader.readAsText(file);
  //   }
  // }

  // parseDbContent(content: string) {
  //   // Assuming the SQLite database dump is in SQL format
  //   // Parse the content and extract data
  //   const rows = content.split('\n');
  //   if (rows.length > 1) {
  //     this.columns = rows[0].split('|').map((column: string) => column.trim());
  //     this.data = rows.slice(2, -1).map((row: string) => {
  //       const values = row.split('|').map((value: string) => value.trim());
  //       const rowData: any = {};
  //       this.columns.forEach((column: string, index: number) => {
  //         rowData[column] = values[index];
  //       });
  //       return rowData;
  //     });
  //   } else {
  //     this.columns = [];
  //     this.data = [];
  //   }
  // }
  
  tableData = { headers: [], rows: [] };

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const dbData = new Uint8Array(reader.result as ArrayBuffer);

      const db = new SQL.Database(dbData);

      const tables = db.exec("SELECT name FROM sqlite_master WHERE type='table';");
      const tableNames = tables[0].values.map((row: any) => row[0]);

      for (const tableName of tableNames) {
        const result = db.exec(`SELECT * FROM ${tableName}`);
        const columns = result[0].columns;
        const rows = result[0].values;
        this.tableData = { headers: columns, rows };
      }
    };

    reader.readAsArrayBuffer(file);
  }


}
