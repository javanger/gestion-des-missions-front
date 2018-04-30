import { Injectable } from '@angular/core';
import { Nature, LigneDeFrais } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AjouterLigneDeFraisComponent } from '../ajouter-ligne-de-frais/ajouter-ligne-de-frais.component';

@Injectable()
export class NoteDeFraisService {

  constructor(private _http: HttpClient) { }

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
}