import { Component } from '@angular/core';
import { Statistique } from './models/statistique'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluation-angular';
 
  statistiques: Statistique[] = [
    new Statistique("12345", "stat1", "12"),
    new Statistique("67890", "stat2", "57")];

    constructor(){
      setTimeout(() => {
        this.statistiques.push(new Statistique("75314", "stat3", "98"));
      }, 2000);
    }

  
}