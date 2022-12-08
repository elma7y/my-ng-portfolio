import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript-projetcs',
  templateUrl: './javascript-projetcs.component.html',
  styleUrls: ['./javascript-projetcs.component.css'],
})
export class JavascriptProjetcsComponent {
  constructor() {}
  sourceGithub() {
    window.open('https://github.com/elma7y/github-api', '_blank');
  }
  liveGithub() {
    window.open('https://elma7y.github.io/github-api/', '_blank');
  }
  sourceHangman() {
    window.open('https://github.com/elma7y/hang-man', '_blank');
  }
  liveHangman() {
    window.open('https://elma7y.github.io/hang-man/', '_blank');
  }
  sourceQuiz() {
    window.open('https://github.com/elma7y/quiz-app', '_blank');
  }
  liveQuiz() {
    window.open('https://elma7y.github.io/quiz-app/', '_blank');
  }
  sourceLocal() {
    window.open('https://github.com/elma7y/local-storage', '_blank');
  }
  liveLocal() {
    window.open('https://elma7y.github.io/local-storage/', '_blank');
  }
  sourceTodo() {
    window.open('https://github.com/elma7y/to-do-list', '_blank');
  }
  liveTodo() {
    window.open('https://elma7y.github.io/to-do-list/', '_blank');
  }
  sourcePor() {
    window.open('https://github.com/elma7y/my-portfolio', '_blank');
  }
  livePor() {
    window.open('https://elma7y.github.io/my-portfolio/', '_blank');
  }
  sourceMemory() {
    window.open('https://github.com/elma7y/memory-game', '_blank');
  }
  liveMemory() {
    window.open('https://elma7y.github.io/memory-game/', '_blank');
  }
  sourceSlider() {
    window.open('https://github.com/elma7y/photo-slider', '_blank');
  }
  liveSlider() {
    window.open('https://elma7y.github.io/photo-slider/', '_blank');
  }
}
