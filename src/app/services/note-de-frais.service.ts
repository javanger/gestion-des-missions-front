import { Injectable } from '@angular/core';
import { LigneDeFrais, MissionDetailsFrais, NoteDeFrais } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AjouterLigneDeFraisComponent } from '../ajouter-ligne-de-frais/ajouter-ligne-de-frais.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

/**
 * Service REST pour la gestion des notes de frais
 */
@Injectable()
export class NoteDeFraisService {

  // création d'une instance de Subject
  // le subject est privé, seul le service NoteDeFraisService peut émettre une valeur
  // <string> désigne la nature de la donnée à notifier
  private _ajoutFrais = new Subject<LigneDeFrais>();

  constructor(private _http: HttpClient) { }

  // création d'une propriété publique
  // accessible en dehors du service
  // seule l'interface Observable du Subject est exposée
  get ajoutFraisSubject(): Observable<LigneDeFrais> {
    return this._ajoutFrais.asObservable();
  }

  /**
   * Récupérer la liste des nature de frais
   * @returns Observable<string[]>
   */
  listerNatures(): Observable<string[]> {
    const URL_API = environment.apiUrl + "api/notes/frais/natures";
    return this._http.get<string[]>(URL_API);
  }

  /**
   * Envoyer le nouveau frais au serveur pour validation et enregistrement
   * @param frais 
   * @param idNote 
   * @returns Observable<LigneDeFrais> 
   */
  ajouterFrais(frais: LigneDeFrais, idNote: string): Observable<LigneDeFrais | any> {
    const URL_API = environment.apiUrl + "api/notes/" + idNote + "/frais";
    return this._http.post<LigneDeFrais>(URL_API, frais);
  }

  /**
   * Récupérer les missions du collaborateur authentifié
   * @param matricule string
   * @returns Observable<MissionDetailsFrais[]>
   */
  listerMissionDetailsFrais(matricule: string): Observable<MissionDetailsFrais[]> {
    const URL_API = environment.apiUrl + "api/missions/collaborateur/" + matricule;
    return this._http.get<MissionDetailsFrais[]>(URL_API);
  }

  /**
   * Récupérer mission en fonction de l'id
   * @param id string : id de la mission
   * @return Observable<MissionDetailsFrais>
   */
  recupererMissionAvecId(id: string): Observable<MissionDetailsFrais> {
    const URL_API = environment.apiUrl + "api/missions/" + id;
    return this._http.get<MissionDetailsFrais>(URL_API);
  }

  /**
   * Récupérer la liste de frais d'un note
   * @param id string : id de la mission
   * @return Observable<NoteDeFrais>
   */
  recupererFraisAvecNote(id: string): Observable<NoteDeFrais> {
    const URL_API = environment.apiUrl + "api/notes/missions/" + id;
    return this._http.get<NoteDeFrais>(URL_API);
  }

  /**
   * 
   * @param id 
   * @return Observable<string>
   */
  supprimerLigneFrais(id: string): Observable<String> {
    const URL_API = environment.apiUrl + "api/notes/frais/" + id;
    return this._http.delete<string>(URL_API);
  }
}