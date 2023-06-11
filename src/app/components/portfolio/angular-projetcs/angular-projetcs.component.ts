import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-projetcs',
  templateUrl: './angular-projetcs.component.html',
  styleUrls: ['./angular-projetcs.component.css'],
})
export class AngularProjetcsComponent {
  constructor() {}

  sourceEcommerce() {
    window.open('https://github.com/elma7y/sameh-ecommerce', '_blank');
  }
  liveEcommerce() {
    window.open('https://sameh-ecommerce.vercel.app/', '_blank');
  }
  sourceDashboard() {
    window.open('https://github.com/elma7y/angular-dashboard', '_blank');
  }
  liveDashboard() {
    window.open(
      'https://angular-dashboard-av3v9x2s2-elma7y.vercel.app/',
      '_blank'
    );
  }
  sourceDashboardAirtable() {
    window.open('https://kevin-dashboard.vercel.app/', '_blank');
  }
  liveDashboardAirtable() {
    window.open('https://kevin-dashboard.vercel.app/', '_blank');
  }
  sourceDashboardpmclaim() {
    window.open('https://mypmclaim.com/', '_blank');
  }
  liveDashboardpmclaim() {
    window.open('https://mypmclaim.com/', '_blank');
  }
  sourceDashboardpopup() {
    window.open('https://popup.mypmclaim.com/', '_blank');
  }
  liveDashboardpopup() {
    window.open('https://popup.mypmclaim.com/', '_blank');
  }
}
