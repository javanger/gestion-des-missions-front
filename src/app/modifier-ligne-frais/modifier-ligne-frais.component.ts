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
  message: string = "";
  natures: string[];
  @Input() idFrais: string;
  frais: LigneDeFrais;

  constructor(private _noteDeFraisService: NoteDeFraisService) {
    
  }
  
  ngOnInit() {
    
    console.log("id frais: " + this.idFrais);
    
    this._noteDeFraisService.listerNatures().subscribe(list => this.natures = list);
    // this.frais.date = this.ancienfrais.date;
    // this.frais.id = this.ancienfrais.id;
    // this.frais.montant = this.ancienfrais.montant;
    // this.frais.nature = this.ancienfrais.nature;
  }

  modifier(ligne: LigneDeFrais) {

    // reinitialiser le message
    this.message = "";
    // vérifier la valeur des champs
    if (this._verifierDate(ligne.date) && this._verifierMontant(ligne.montant) && this._verifierNature(ligne.nature)) {

      //console.log(ligne.id);
      // envoyer l'objet au serveur pour l'ajouter en base
      /* this._noteDeFraisService.ajouterFrais(this.frais, this.note.id)
         .subscribe(
           frais => {
             location.reload();                                                                                                                                                                                                                                                                                                                                                                                                                                                           
           }, fail => {
             this.message = fail.error.message;
           }
         );*/
      console.log("modification :)");

      // afficher la modal success
      // TODO service notification

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
    const date = new Date(valeur);
    const debut = new Date(this.mission.dateDebut);
    const fin = new Date(this.mission.dateFin);
    const condition: boolean = date >= debut && date <= fin;
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
