import { Component } from '@angular/core';

@Component({
  selector: 'app-pwd-generator',
  templateUrl: './pwd-generator.component.html',
  styleUrls: ['./pwd-generator.component.css']
})
export class PwdGeneratorComponent {
  passwordLength: number = 8;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSpecial: boolean = false;
  generatedPassword: string = '';

  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    let characters = '';
    if (this.includeUppercase) characters += uppercaseChars;
    if (this.includeLowercase) characters += lowercaseChars;
    if (this.includeNumbers) characters += numberChars;
    if (this.includeSpecial) characters += specialChars;

    if (!characters) {
      alert('Please select at least one character type.');
      return;
    }

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    this.generatedPassword = password;
  }
}
