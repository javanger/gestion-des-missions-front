import { Component, OnInit, Input } from '@angular/core';
import { NoteDeFraisService } from '../services/note-de-frais.service';
import { MissionDetailsFrais } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-frais',
  templateUrl: './gestion-frais.component.html',
  styleUrls: ['./gestion-frais.component.scss']
})
export class GestionFraisComponent implements OnInit {

  public missions: MissionDetailsFrais[];
  constructor(private _fraisServ: NoteDeFraisService, private router: Router) { }

  ngOnInit() {
    /**
     * Lister les missions du collaborateur
     */
    this.missions = this._fraisServ.listerMissionDetailsFrais("matricule");
  }

  afficherDetails(mission: MissionDetailsFrais) {
    console.log(mission.nature);
    this.router.navigate(['/gestion-frais/details', { idMission: mission.id }]);
  }

}
