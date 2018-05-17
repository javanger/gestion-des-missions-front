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
  private supprimerFrais: Subscription;
  currentId: string;

  constructor(private _fraisServ: NoteDeFraisService, private _router: ActivatedRoute) {
    this.ajoutFrais = this._fraisServ.ajouterFraisSubject.subscribe(
      (frais: LigneDeFrais) => {
        // ajouter le nouveau frais à la liste
        this.note.items.push(frais);
      }
    );

    this.supprimerFrais = this._fraisServ.supprimerFraisSubject.subscribe(
      (id: string) => {
        // ajouter le nouveau frais à la liste
        this.note.items = this.note.items.filter(f => f.id != id);;
      }
    );
  }

  ngOnInit() {
    // récupérer en paramètre de la route
    let idMission: string = this._router.snapshot.paramMap.get("id");
    // initialiser la liste des lignes de frais
    this._fraisServ.recupererMissionAvecId(idMission).subscribe(mission => this.mission = mission);
    this._fraisServ.recupererFraisAvecNote(idMission).subscribe(note => {
      this.note = note;
      this.currentId = note.items[0].id;
    });
  }

  delete(id: string): void {
    this._fraisServ.supprimerLigneFrais(id).subscribe(
      success => { 
        //location.reload();
       // this._fraisServ.supprimerFraisSubject.next(id);
      },
      fail => //location.reload()
      this._fraisServ.supprimerFraisSubject.next(id)
    );
  }

}
