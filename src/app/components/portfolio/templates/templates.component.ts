import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent {
  sourceT1() {
    window.open('https://github.com/elma7y/template-1', '_blank');
  }
  liveT1() {
    window.open('https://elma7y.github.io/template-1/', '_blank');
  }
  sourceT2() {
    window.open('https://github.com/elma7y/template-2', '_blank');
  }
  liveT2() {
    window.open('https://elma7y.github.io/template-2/', '_blank');
  }
  sourceT3() {
    window.open('https://github.com/elma7y/my-first-project', '_blank');
  }
  liveT3() {
    window.open('https://elma7y.github.io/my-first-project/', '_blank');
  }
}
