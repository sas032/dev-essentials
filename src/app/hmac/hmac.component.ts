import { Component } from '@angular/core';

@Component({
  selector: 'app-hmac',
  templateUrl: './hmac.component.html',
  styleUrls: ['./hmac.component.css']
})
export class HmacComponent {
  message: string = '';
  key: string = '';
  hmac: string = '';

  generateHMAC() {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(this.message);
      const keyData = encoder.encode(this.key);

      if(!(this.key === undefined || this.key === "" || this.key === null)){
        crypto.subtle.importKey(
          'raw',
          keyData,
          { name: 'HMAC', hash: { name: 'SHA-256' } },
          false,
          ['sign']
        ).then((importedKey) => {
          crypto.subtle.sign('HMAC', importedKey, data)
            .then((signature) => {
              const byteArray = Array.from(new Uint8Array(signature));
              this.hmac = byteArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
            })
            .catch(error => {
              console.error('Error calculating HMAC:', error);
              this.hmac = 'Error';
            });
        });
      }else{
        this.hmac = '';
      }
    } catch (error) {
      console.error('Error generating HMAC:', error);
      this.hmac = 'Error';
    }
  }
}
