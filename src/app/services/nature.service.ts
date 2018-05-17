import { Injectable } from '@angular/core';
import { Nature } from '../models';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';

const URL_API = environment.apiUrl;

@Injectable()
export class NatureService {

  actualiserSub = new Subject<Nature[]>();

  constructor(private _http: HttpClient) { }

  listerNatures(): Observable<Nature[]> {

    // récupérer la liste des nature côté serveur
    return this._http.get(URL_API + "api/natures")
      .map((data: any) => {
        return data.map((s: any) => new Nature(s));
      })
  };

  sendNature(nature: Nature):Observable<Nature[]>{

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this._http.post(
      // URL d'accès au service
      URL_API + "api/natures",

      // Corps de la réquête
      {
        'libelle': nature.libelle,
        'dateFin': nature.dateFin,
        'estFacturee': nature.estFacturee,
        'versementPrime': nature.versementPrime,
        'pourcentagePrime': nature.pourcentagePrime,
        'tjm': nature.tjm
      },

      // Options de la requête HTTP
      httpOptions)
      .map((data: any) => {
        return data.map((s) => new Nature(s));
      })
      .do((data: any) => this.actualiserSub.next(data));
    }

  deleteNature(libelle: string):Observable<Nature[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
     };
     return this._http.delete(
      // url d'accès au service
      URL_API + "api/natures/" + libelle,
      // options de la requête HTTP
      httpOptions)
      .map((data: any) => {
        return data.map((s: any) => new Nature(s));
      }, (error: any) => {

        // Cas d'erreur
        
      });
  }

  actualiser():Observable<Nature[]> { 
    return this.actualiserSub.asObservable();
  }
}
