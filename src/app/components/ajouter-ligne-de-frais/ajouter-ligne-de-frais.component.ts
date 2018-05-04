import { Component, OnInit, Input } from '@angular/core';
import { LigneDeFrais, NoteDeFrais, MissionDetailsFrais } from '../../models';
import { NoteDeFraisService } from '../../services/note-de-frais.service';
import { resolve, reject } from 'q';

/**
 * Formulaire d'ajout d'une ligne de frais
 */
@Component({
  selector: 'app-ajouter-ligne-de-frais',
  templateUrl: './ajouter-ligne-de-frais.component.html',
  styleUrls: ['./ajouter-ligne-de-frais.component.css']
})
export class AjouterLigneDeFraisComponent implements OnInit {

  @Input() note: NoteDeFrais;
  @Input() mission: MissionDetailsFrais;
  frais: LigneDeFrais;
  natures: string[];
  message: string;
  private _estUnique: boolean = false;

  constructor(private _noteDeFraisService: NoteDeFraisService) {
    this.frais = new LigneDeFrais();
  }

  ngOnInit() {
    this._noteDeFraisService.listerNatures().subscribe(list => this.natures = list);
  }

  submit(frais: LigneDeFrais, modal: any) {
    // reinitialiser le message
    this.message = "";
    // vérifier la valeur des champs

    this._verifierExistance(() => {
      if (this._verifierDate() && this._verifierMontant() && this._verifierNature() && this._estUnique) {
        // envoyer l'objet au serveur pour l'ajouter en base
        this._noteDeFraisService.ajouterFrais(frais, this.note.id);
        // fermer la modal
        modal.hide();
      }
    });

  }

  /**
   * Retourne vrai si la valeur est positive
   * @param valeur boolean
   */
  private _verifierMontant(): boolean {
    const condition: boolean = parseInt(this.frais.montant) > 0;
    if (!condition) this.message += "Le montant doit être positif !\n";
    return condition;
  }

  /**
   * Retourne vrai si que la date est comprise dans la periode de la mission
   * @param valeur boolean
   */
  private _verifierDate(): boolean {
    const date = new Date(this.frais.date);
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
  private _verifierNature(): boolean {
    const condition: boolean = this.natures.includes(this.frais.nature);
    if (!condition) this.message += "Veuillez sélectionner une nature !\n";
    return condition;
  }

  /**
   * Retourne 
   */
  private _verifierExistance(callback: any): void {
    this._noteDeFraisService.verifierExistanceFrais(this.mission.id, this.frais.date, this.frais.nature).subscribe(
      (c: boolean) => {
        this._estUnique = c;
        if (!c) this.message += "La note de frais existe déja pour cette date et cette nature. De préférence veuillez la modifier ! ";
        callback();
      }
    );
  }

}
