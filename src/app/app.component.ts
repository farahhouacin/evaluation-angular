import { Component } from '@angular/core';
import { Statistique } from './models/statistique'; 
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'evaluation-angular';

    constructor(  public statistiqueService: StatistiqueService ){
     
    }
}