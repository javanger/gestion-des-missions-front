import { Component, OnInit, Input } from '@angular/core';
import { LigneDeFrais, Nature } from '../models';
import { NoteDeFraisService } from '../services/note-de-frais.service';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-ajouter-ligne-de-frais',
  templateUrl: './ajouter-ligne-de-frais.component.html',
  styleUrls: ['./ajouter-ligne-de-frais.component.css']
})
export class AjouterLigneDeFraisComponent implements OnInit {

  @Input() missionId: number;
  frais: LigneDeFrais;
  natures: string[];
  badNatureMessage: string = "Veuillez sélectionner une nature !";
  badMontantMessage: string = "Le montant doit être positif !";
  badDateMessage: string = "La date doit être comprise dans la période de la mission !";

  constructor(private _noteDeFraisService: NoteDeFraisService) {
    this.frais = new LigneDeFrais();
  }

  ngOnInit() {
    this._noteDeFraisService.listerNatures().then(list => {
      this.natures = list;

    });
  }

  submit(frais: LigneDeFrais) {
    // envoyer l'objet au serveur pour l'ajouter en base
    console.log("frais: " + JSON.stringify(frais));

    this._noteDeFraisService.ajouterFrais(frais, this.missionId).then(res => {
      console.log(res);
    });
  }

  /**
   * Retourne vrai si la valeur est positive
   * @param valeur boolean
   */
  private _verifierMontant(valeur: number): boolean {
    return valeur > 0;
  }

  /**
   * Retourne vrai si que la date est comprise dans la periode de la mission
   * @param valeur boolean
   */
  private _verifierDate(valeur: Date): boolean {
      return true;
  }

  /**
   * Retourne vrai si la nature est comprise dans la liste
   * @param valeur 
   */
  private _verifierNature(valeur: string): boolean {
    return this.natures.includes(valeur);
  }
}
