import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    localStorage.setItem('theme', 'dark');
  }

  darkmode() {
    let dark = document.getElementById('dark');
    let light = document.getElementById('light');
    if (dark) {
      dark.style.visibility = 'hidden';
      if (light) {
        light.style.visibility = 'visible';
      }
    }
    localStorage.setItem('theme', 'white');
    if (localStorage.getItem('theme') == 'white') {
      document.documentElement.style.setProperty('--background-color', '#111');
      document.documentElement.style.setProperty('--white', 'white');
      document.documentElement.style.setProperty('--third-background', '#444');
      document.documentElement.style.setProperty(
        '--second-background',
        '#2b2a2a'
      );
      document.documentElement.style.setProperty(
        '--transision-background',
        '#222'
      );
      document.documentElement.style.setProperty(
        '--shading',
        'hsla(0, 0%, 100%, 0.07)'
      );
    }
  }
  lightmode() {
    let dark = document.getElementById('dark');
    let light = document.getElementById('light');
    if (light) {
      light.style.visibility = 'hidden';
      if (dark) {
        dark.style.visibility = 'visible';
      }
    }
    localStorage.setItem('theme', 'dark');
    if (localStorage.getItem('theme') == 'dark') {
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--white', 'black');
      document.documentElement.style.setProperty(
        '--third-background',
        '#9e9e9e'
      );
      document.documentElement.style.setProperty(
        '--second-background',
        '#9e9e9e'
      );
      document.documentElement.style.setProperty(
        '--transision-background',
        '#eee'
      );
      document.documentElement.style.setProperty(
        '--shading',
        'rgba(30,37,48,.07)'
      );
    }
  }
}
