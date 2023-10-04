import { Component } from '@angular/core';
import * as jspdf from 'jspdf';


@Component({
  selector: 'app-image-to-pdf-converter',
  templateUrl: './image-to-pdf-converter.component.html',
  styleUrls: ['./image-to-pdf-converter.component.css']
})
export class ImageToPdfConverterComponent {
  pdfSrc: any;

  convertToPdf(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.generatePdf(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  generatePdf(imageData: any) {
    // Create a new PDF document
    const doc = new jspdf.jsPDF();
  
    // Calculate the width and height of the PDF
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (pdfWidth * 3) / 4;
  
    // Add the image to the PDF
    doc.addImage(imageData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight - 20);
  
    // Save the PDF as a data URL
    this.pdfSrc = doc.output('datauristring');
  }
  

  downloadPdf() {
    const a = document.createElement('a');
    a.href = this.pdfSrc;
    a.download = 'converted.pdf';
    a.click();
  }
}
