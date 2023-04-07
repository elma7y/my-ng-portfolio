import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  message: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    msg: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor(private http: HttpClient) {}

  sendMessage() {
    return this.http.post(
      'https://formcarry.com/s/qNefbeWmy',
      this.message.value
    );
  }
}
