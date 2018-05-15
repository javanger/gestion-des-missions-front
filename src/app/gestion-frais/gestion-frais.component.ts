import { Component, OnInit, Input } from '@angular/core';
import { NoteDeFraisService } from '../services/note-de-frais.service';
import { MissionDetailsFrais, LigneDeFrais } from '../models';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Subscription } from 'rxjs/Subscription';
import { Utilisateur } from '../model';

/**
 * Affiche la liste des missions du collaborateur authentifié
 */
@Component({
  selector: 'app-gestion-frais',
  templateUrl: './gestion-frais.component.html',
  styleUrls: ['./gestion-frais.component.scss']
})
export class GestionFraisComponent implements OnInit {

  missions: MissionDetailsFrais[];
  utilisateurConnecter:Utilisateur;
  message:string;

  constructor(private _fraisServ: NoteDeFraisService, private router: Router) {}

  ngOnInit() {
    let utilisateurBackup = localStorage.getItem("collaborateur");
    if (utilisateurBackup === null){
      this.router.navigate(['/accueil'])
    }else{
      this.utilisateurConnecter = JSON.parse(utilisateurBackup)
      // Lister les missions du collaborateur
      this._fraisServ.listerMissionDetailsFrais(this.utilisateurConnecter.matricule).subscribe(missions => {
        this.missions = missions},
        error => {
          this.message = "L'utilisateur n'a pas de note de frais";
        });
    }
  }

  /**
   * Rediriger vers ma vue détailée des ma note de frais
   * @param mission 
   */
  afficherDetails(mission: MissionDetailsFrais): void {
    this.router.navigate(['/gestion-frais/details', { id: mission.id }]);
  }

  /**
   * Export la note de frais en pdf
   */
  exportPdf() {
    // TODO 
    console.log("export");
  }

}
