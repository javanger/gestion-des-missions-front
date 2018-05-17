import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MissionDetailsFrais } from '../models';
import { MissionService } from '../services/mission.service';
import { Utilisateur } from '../model';
import { NoteDeFraisService } from '../services/note-de-frais.service';

@Component({
  selector: 'app-lister-missions',
  templateUrl: './lister-missions.component.html',
  styleUrls: ['./lister-missions.component.scss']
})
export class ListerMissionsComponent implements OnInit {

  @Input() listeMissions: MissionDetailsFrais[];
  utilisateurConnecter: Utilisateur;
  message: string;

  constructor(private serviceMission: NoteDeFraisService, private router: Router) { }

  ngOnInit() {

    let utilisateurBackup = localStorage.getItem("collaborateur");
    if (utilisateurBackup === null) {
      this.router.navigate(['/accueil'])
    }else{
      this.utilisateurConnecter = JSON.parse(utilisateurBackup)
      // Lister les missions du collaborateur
      this.serviceMission.listerMissionDetailsFrais(this.utilisateurConnecter.matricule).subscribe(missions => {
        this.listeMissions = missions},
        error => {
          this.message = "L'utilisateur n'a pas de note de frais";
        });
    }


  }
}