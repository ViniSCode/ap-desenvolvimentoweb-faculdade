import { Component } from '@angular/core';
import { Alunos } from './alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ap-faculdade-angular';
  readonly Alunos = Alunos;
}
