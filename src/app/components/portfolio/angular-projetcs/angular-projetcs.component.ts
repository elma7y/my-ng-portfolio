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
    window.open('https://elma7y.github.io/sameh-ecommerce/', '_blank');
  }
  sourceDashboard() {
    window.open('https://github.com/elma7y/angular-dashboard', '_blank');
  }
  liveDashboard() {
    window.open('https://elma7y.github.io/angular-dashboard/', '_blank');
  }
}
