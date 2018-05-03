import { Component, OnInit, Input } from '@angular/core';
import { LigneDeFrais, NoteDeFrais, MissionDetailsFrais } from '../models';
import { NoteDeFraisService } from '../services/note-de-frais.service';
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
  badNatureMessage: string = "Veuillez sélectionner une nature !";
  badMontantMessage: string = "Le montant doit être positif !";
  badDateMessage: string = "La date doit être comprise dans la période de la mission !";

  constructor(private _noteDeFraisService: NoteDeFraisService) {
    this.frais = new LigneDeFrais();
  }

  ngOnInit() {
    this._noteDeFraisService.listerNatures().subscribe(list => this.natures = list);
  }

  submit(frais: LigneDeFrais, modal: any) {
    // vérifier la valeur des champs
    if (this._verifierDate(frais.date) && this._verifierMontant(frais.montant) && this._verifierNature(frais.nature)) {
      // envoyer l'objet au serveur pour l'ajouter en base
      this._noteDeFraisService.ajouterFrais(frais, this.note.id);
      // fermer la modal
      modal.hide();
      // afficher la modal success
      // TODO service notification
    }
  }

  /**
   * Retourne vrai si la valeur est positive
   * @param valeur boolean
   */
  private _verifierMontant(valeur: string): boolean {
    return parseInt(valeur) > 0;
  }

  /**
   * Retourne vrai si que la date est comprise dans la periode de la mission
   * @param valeur boolean
   */
  private _verifierDate(valeur: string): boolean {
    const date = new Date(valeur);
    const debut = new Date(this.mission.dateDebut);
    const fin = new Date(this.mission.dateFin);
    return date >= debut && date <= fin;
  }

  /**
   * Retourne vrai si la nature est comprise dans la liste
   * @param valeur 
   */
  private _verifierNature(valeur: string): boolean {
    return this.natures.includes(valeur);
  }
}
