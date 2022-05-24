import { Component } from '@angular/core';
import { Statistique } from './models/statistique'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluation-angular';
    
  stat1: Statistique = new Statistique("12345", "stat1", "12");
  
  stat2: Statistique = new Statistique("67890", "stat2", "57");
 
  constructor(){

  }
  
}