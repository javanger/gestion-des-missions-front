import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MissionDetailsFrais, LigneDeFrais } from '../models';
import { NoteDeFraisService } from '../services/note-de-frais.service';

@Component({
  selector: 'app-note-de-frais',
  templateUrl: './note-de-frais.component.html',
  styleUrls: ['./note-de-frais.component.css']
})
export class NoteDeFraisComponent implements OnInit {

  public mission: MissionDetailsFrais;
  public frais: LigneDeFrais[];
  
  constructor(private _fraisServ: NoteDeFraisService, private _router: ActivatedRoute) {
  }

  ngOnInit() {
    let idMission: string =this._router.snapshot.paramMap.get("mission");
    this. mission = this._fraisServ.recupererMissionAvecId(idMission);

    //temp
    this.frais = [
      new LigneDeFrais("Hôtel", "22/05/2017", "75"),
      new LigneDeFrais("Hôtel", "23/05/2017", "75"),
      new LigneDeFrais("Petit-déjeuner", "23/05/2017", "9"),
      new LigneDeFrais("Restaurant", "23/05/2017", "12.5"),
      new LigneDeFrais("Restaurant", "23/05/2017", "12.5"),
      new LigneDeFrais("Hôtel", "24/05/2017", "75"),
    ];
  }

}
