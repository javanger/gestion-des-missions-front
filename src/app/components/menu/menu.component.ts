import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur, Role } from '../../model';
import { ConnexionService } from '../../services/connexion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  estAdministrateur:boolean = false;
  estManager:boolean = false;
  estConnecter:boolean = false;
  utilisateurConnecter:Utilisateur;

  constructor(private cService:ConnexionService) { }

  ngOnInit() {
    this.connecter();
  }

  connecter(){
    this.cService.estConnecter().subscribe(utilisateur => {
      this.estConnecter = true;
      this.utilisateurConnecter = utilisateur;
      if(this.utilisateurConnecter.role === Role.ROLE_ADMINISTRATEUR){
        this.estAdministrateur = true;
      }else if(this.utilisateurConnecter.role === Role.ROLE_MANAGER){
        this.estManager = true;
      }
    })
  }

  deconnexion(){
    this.cService.deconnexion().subscribe(()=>{
      this.estConnecter = false;
      this.estAdministrateur = false;
      this.estManager = false;
    })
  }
}
