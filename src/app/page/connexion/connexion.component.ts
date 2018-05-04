import { Component, OnInit } from '@angular/core';
import { MonModel, Utilisateur } from '../../model';
import { ConnexionService } from '../../services/connexion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent implements OnInit {
  
  monModel:MonModel = new MonModel();

  constructor(private cService:ConnexionService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    
    this.cService.connexion(this.monModel)
    .subscribe(utilisateur => {
      this.router.navigate(['/accueil'])
    },
  error => {
    // TODO !!!!
  })
    ;
  }

}
