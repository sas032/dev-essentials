import { Component } from '@angular/core';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent {
  inputString: string = '';
  selectedAlgorithm: string = 'md5';
  checksum: string = '';

  async calculateChecksum() {
    if(!(this.inputString === undefined || this.inputString === "" || this.inputString === null)){
      if (this.selectedAlgorithm === 'md5') {
        this.checksum = await this.calculateMD5(this.inputString);
      } else if (this.selectedAlgorithm === 'sha256') {
        this.checksum = await this.calculateSHA256(this.inputString);
      }
    }else{
      this.checksum = '';
    }
    
  }

  private calculateMD5(input: string): string {
    const spark = new SparkMD5();
    spark.append(input);
    return spark.end();
  }

  // private async calculateMD5(input: string): Promise<string> {
  //   const encoder = new TextEncoder();
  //   const data = encoder.encode(input);
  //   const hashBuffer = await crypto.subtle.digest('MD5', data);
  //   console.log(this.toHexString(new Uint8Array(hashBuffer)));
  //   return this.toHexString(new Uint8Array(hashBuffer));
  // }

  private async calculateSHA256(input: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return this.toHexString(new Uint8Array(hashBuffer));
  }

  private toHexString(byteArray: Uint8Array): string {
    return Array.prototype.map.call(byteArray, (byte) => {
      return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
  }




  
}
