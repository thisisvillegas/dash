import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { footballscore } from './components/footballscore/footballscore.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, footballscore],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
