import { FormGroup } from '@angular/forms';
import { ContactService } from './../../services/contact.service';
import { Component, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements DoCheck {
  namevalidmsg: string;
  emailvalidmsg: string;
  namevalidstyle: string;
  emailvalidstyle: string;
  subjectvalidmsg: string;
  subjectvalidstyle: string;
  msgvalidmsg: string;
  msgvalidstyle: string;
  message: FormGroup;
  constructor(private contact: ContactService) {
    //validation msgs
    this.namevalidmsg = '';
    this.emailvalidmsg = '';
    this.msgvalidmsg = '';
    this.subjectvalidmsg = '';
    //validation styles
    this.namevalidstyle = 'black';
    this.emailvalidstyle = 'black';
    this.msgvalidstyle = 'black';
    this.subjectvalidstyle = 'black';
    this.message = contact.message;
  }
  ngDoCheck(): void {
    this.messagevalidation();
  }

  messagevalidation() {
    if (
      this.message.controls['name'].touched &&
      this.message.controls['name'].dirty
    ) {
      this.namevalidstyle = 'red';
      this.namevalidmsg = 'name must be at least 4 characters';
      if (this.message.controls['name'].valid) {
        this.namevalidstyle = 'green';
        this.namevalidmsg = 'name is valid';
        if (this.message.controls['name'].value == '') {
          this.namevalidmsg = 'name is required*';
          this.namevalidstyle = 'black';
        }
      }
    }
    if (
      this.message.controls['subject'].touched &&
      this.message.controls['subject'].dirty
    ) {
      this.subjectvalidstyle = 'red';
      this.subjectvalidmsg = 'subject must be at least 4 characters';
      if (this.message.controls['subject'].valid) {
        this.subjectvalidstyle = 'green';
        this.subjectvalidmsg = 'subject is valid';
        if (this.message.controls['subject'].value == '') {
          this.subjectvalidmsg = 'subject is required*';
          this.subjectvalidstyle = 'black';
        }
      }
    }
    if (
      this.message.controls['email'].touched &&
      this.message.controls['email'].dirty
    ) {
      this.emailvalidmsg = ' email is invalid';
      this.emailvalidstyle = 'red';
      if (this.message.controls['email'].valid) {
        this.emailvalidmsg = 'email is valid';
        this.emailvalidstyle = 'green';
      }
      if (this.message.controls['email'].value == '') {
        this.emailvalidmsg = 'email is required*';
        this.emailvalidstyle = 'black';
      }
    }
    if (
      this.message.controls['msg'].touched &&
      this.message.controls['msg'].dirty
    ) {
      this.msgvalidmsg = ' at least two words are required';
      this.msgvalidstyle = 'red';
      if (this.message.controls['msg'].valid) {
        this.msgvalidmsg = 'msg is valid';
        this.msgvalidstyle = 'green';
      }
      if (this.message.controls['msg'].value == '') {
        this.msgvalidmsg = 'msg is required*';
        this.msgvalidstyle = 'black';
      }
    }
  }

  sendMessage() {
    this.contact.sendMessage().subscribe(
      (res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          background: 'var(--background-color)',
          color: 'var(--main-color)',

          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'message sent successfully',
        });
      },
      () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          background: 'var(--background-color)',
          color: 'var(--main-color)',

          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'error',
          title: 'Oops something went wrong, please try again',
        });
      }
    );
  }
}
