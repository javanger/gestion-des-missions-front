import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MissionDetailsFrais, LigneDeFrais, NoteDeFrais } from '../models';
import { NoteDeFraisService } from '../services/note-de-frais.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

/**
 * Vue détaillée de la mission et des frais associés
 */
@Component({
  selector: 'app-note-de-frais',
  templateUrl: './note-de-frais.component.html',
  styleUrls: ['./note-de-frais.component.scss']
})
export class NoteDeFraisComponent implements OnInit {

  public mission: MissionDetailsFrais = new MissionDetailsFrais();
  public note: NoteDeFrais = new NoteDeFrais();
  private ajoutFrais: Subscription;
  //@Output() clickDelete:EventEmitter<number> = new EventEmitter<number>();

  constructor(private _fraisServ: NoteDeFraisService, private _router: ActivatedRoute) {
    this.ajoutFrais = this._fraisServ.ajoutFraisSubject.subscribe(
      (frais: LigneDeFrais) => {
        // ajouter le nouveau frais à la liste
        this.note.items.push(frais);
      }
    );
  }

  ngOnInit() {
    // récupérer en paramètre de la route
    let idMission: string = this._router.snapshot.paramMap.get("id");
    // initialiser la liste des lignes de frais
    this._fraisServ.recupererMissionAvecId(idMission).subscribe(mission => this.mission = mission);
    this._fraisServ.recupererFraisAvecNote(idMission).subscribe(note => this.note = note);
  }

  delete(id: string): void {
    this._fraisServ.supprimerLigneFrais(id).subscribe(
      success => location.reload(),
      fail => location.reload()
    );
  }

}
