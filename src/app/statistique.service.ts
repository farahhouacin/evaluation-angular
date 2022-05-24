import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  statistiques: Statistique[] = [
    new Statistique("12345", "stat1", "12"),
    new Statistique("67890", "stat2", "57")];

  constructor() { }
}
