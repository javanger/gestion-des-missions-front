import {Component} from '@angular/core';
import {environment} from "../environments/environment";
import { Utilisateur } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  utilisateurConnecter:Utilisateur

  estConnecter(utilisateur:Utilisateur){
    this.utilisateurConnecter = utilisateur;
    console.log(this.utilisateurConnecter)
  }
}