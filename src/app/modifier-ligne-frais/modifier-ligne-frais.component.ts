import { Component, OnInit, Input } from '@angular/core';
import { LigneDeFrais, NoteDeFrais, MissionDetailsFrais } from '../models';
import { NoteDeFraisService } from '../services/note-de-frais.service';

@Component({
  selector: 'app-modifier-ligne-frais',
  templateUrl: './modifier-ligne-frais.component.html',
  styleUrls: ['./modifier-ligne-frais.component.scss']
})
export class ModifierLigneFraisComponent implements OnInit {

  @Input() note: NoteDeFrais;
  @Input() mission: MissionDetailsFrais;
  @Input() idFrais: string;
  message: string = "";
  natures: string[];
  frais: LigneDeFrais;

  constructor(private _noteDeFraisService: NoteDeFraisService) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this._noteDeFraisService.recupererLigneFrais(this.idFrais).subscribe(frais => this.frais = frais);
    this._noteDeFraisService.listerNatures().subscribe(list => this.natures = list);
  }

  modifier() {

    // reinitialiser le message
    this.message = "";
    // vérifier la valeur des champs
    console.log(JSON.stringify(this.frais));

    if (this._verifierDate(this.frais.date) && this._verifierMontant(this.frais.montant) && this._verifierNature(this.frais.nature)) {
      // envoyer l'objet au serveur pour l'ajouter en base
      this._noteDeFraisService.modifierFrais(this.frais)
        .subscribe(
          frais => {
            location.reload();
          }, fail => {
            this.message = fail.error.message;
          }
        );


      console.log("modification :)");
    }
  }


  /**
 * Retourne vrai si la valeur est positive
 * @param valeur boolean
 */
  private _verifierMontant(valeur: string): boolean {
    const condition: boolean = parseInt(valeur) > 0;
    if (!condition) this.message += "Le montant doit être positif !\n";
    return condition;
  }

  /**
   * Retourne vrai si que la date est comprise dans la periode de la mission
   * @param valeur boolean
   */
  private _verifierDate(valeur: string): any {
    console.log(valeur);
    const date = new Date(valeur);
    const debut = new Date(this.mission.dateDebut);
    const fin = new Date(this.mission.dateFin);
    const condition: boolean = date >= debut && date <= fin;
    console.log(debut + " " + date + " " + fin);
    if (!condition) this.message += "La date doit être comprise dans la période de la mission !\n";
    return condition;
  }

  /**
   * Retourne vrai si la nature est comprise dans la liste
   * @param valeur 
   */
  private _verifierNature(valeur: string): any {
    const condition: boolean = this.natures.includes(valeur);
    if (!condition) this.message += "Veuillez sélectionner une nature !\n";
    return condition;
  }
}
