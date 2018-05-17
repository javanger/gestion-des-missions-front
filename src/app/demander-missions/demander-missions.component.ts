import { Component, OnInit } from '@angular/core';
import { MissionDetailsFrais, Nature } from '../models';
import { MissionService } from '../services/mission.service';
import { NoteDeFraisService } from '../services/note-de-frais.service';
import { NatureService } from '../services/nature.service';
import { Utilisateur } from '../model';

@Component({
  selector: 'app-demander-missions',
  templateUrl: './demander-missions.component.html',
  styleUrls: ['./demander-missions.component.scss']
})
export class DemanderMissionsComponent implements OnInit {

  newMission: MissionDetailsFrais = new MissionDetailsFrais(null);
  message: string;
  natures: Nature[];
  transports: string[];
  utilisateurConnecter: Utilisateur;

  constructor(private _natureService: NatureService, private _missionService: MissionService) { }

  ngOnInit() {
    this._natureService.listerNatures().subscribe(list => this.natures = list);
    this._missionService.listerTransports().subscribe(list => this.transports = list);

    let utilisateurBackup = localStorage.getItem("collaborateur");
    if (utilisateurBackup != null) {
      this.utilisateurConnecter = JSON.parse(utilisateurBackup)
    }
  }

  submit() {
    this._missionService.demanderMission(this.newMission, this.utilisateurConnecter.matricule);
  }

}
