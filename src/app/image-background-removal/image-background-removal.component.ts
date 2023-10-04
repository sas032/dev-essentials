import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-background-removal',
  templateUrl: './image-background-removal.component.html',
  styleUrls: ['./image-background-removal.component.css']
})
export class ImageBackgroundRemovalComponent {
  // @ViewChild('imageCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  // imageSrc: string | ArrayBuffer | null = null;

  // processImage(event: any) {
  //   const file = event.target.files[0];

  //   if (file && file.type.startsWith('image/')) {
  //     const canvas = this.canvas.nativeElement;
  //     const ctx = canvas.getContext('2d');
  //     if (!ctx) {
  //       console.error('Canvas context is null.');
  //       return;
  //     }

  //     const img = new Image();
  //     img.onload = () => {
  //       canvas.width = img.width;
  //       canvas.height = img.height;

  //       // Draw the image on the canvas
  //       ctx.drawImage(img, 0, 0);

  //       // Apply background removal (basic example: set a transparent background)
  //       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //       const pixels = imageData.data;

  //       for (let i = 0; i < pixels.length; i += 4) {
  //         const r = pixels[i];
  //         const g = pixels[i + 1];
  //         const b = pixels[i + 2];

  //         // Check if the pixel is close to the background color (e.g., white)
  //         if (r > 200 && g > 200 && b > 200) {
  //           // Make the pixel transparent
  //           pixels[i + 3] = 0;
  //         }
  //       }

  //       // Put the modified image data back on the canvas
  //       ctx.putImageData(imageData, 0, 0);

  //       // Display the processed image
  //       this.imageSrc = canvas.toDataURL('image/png');
  //     };

  //     img.src = URL.createObjectURL(file);
  //   }
  // }

  // downloadImage() {
  //   const link = document.createElement('a');
  //   link.download = 'image.png';
    
  //   // Ensure that this.imageSrc is a string
  //   if (typeof this.imageSrc === 'string') {
  //     link.href = this.imageSrc;
  //     link.click();
  //   } else {
  //     console.error('Invalid image source.');
  //   }
  // }
}

