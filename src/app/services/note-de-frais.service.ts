import { Injectable } from '@angular/core';
import { Nature, LigneDeFrais, MissionDetailsFrais } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AjouterLigneDeFraisComponent } from '../ajouter-ligne-de-frais/ajouter-ligne-de-frais.component';
import { Observable } from 'rxjs/observable';

@Injectable()
export class NoteDeFraisService {

  constructor(private _http: HttpClient) { }

  /**
   * Récupérer la liste des nature de frais
   */
  listerNatures(): Promise<string[]> {
    return new Promise((done, left) => {
      const URL_API = environment.apiUrl + "api/notes/frais/natures";
      this._http.get(URL_API)
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          left(error);
        });
    });
  }

  /**
   * Envoyer le nouveau frais au serveur pour validation et enregistrement
   * @param frais 
   * @param idMission 
   */
  ajouterFrais(frais: LigneDeFrais, idMission: number): Promise<LigneDeFrais> {
    return new Promise((done, left) => {
      const URL_API = environment.apiUrl + "api/notes/frais/" + idMission;
      this._http.post(URL_API, frais)
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          left(error);
        });
    });
  }

  /**
   * Récupérer les missions du collaborateur authentifié
   */
  listerMissionDetailsFrais(matricule: string): any {
    /*const matricule: string = "456445";
    const URL_API = environment.apiUrl + "api/missions/" + matricule;
    return this._http.get<MissionDetailsFrais>(URL_API);*/

    return [
      new MissionDetailsFrais("1", true, "22/05/2017", "26/05/2017", "Conseil", "Nantes", "Lyon", "Avion", "0", "0"),
      new MissionDetailsFrais("2", false, "02/10/2017", "06/10/2017", "Formation", "Nantes", "Rennes", "Covoiturage", "0", "0"),
      new MissionDetailsFrais("3", false, "13/11/2017", "17/11/2017", "Conseil", "Nantes", "Nantes", "Voiture de service", "0", "0"),
      new MissionDetailsFrais("4", false, "02/01/2018", "12/01/2018", "Conseil", "Lyon", "Monpelier", "Voiture de service", "0", "0")
    ];
  }

  /**
   * Récupérer mission en fonction de l'id
   */
  recupererMissionAvecId(id: string): MissionDetailsFrais { 
    return new MissionDetailsFrais("1", true, "22/05/2017", "26/05/2017", "Conseil", "Nantes", "Lyon", "Avion", "0", "0");
  }

}