import { Injectable } from '@angular/core';
import { Nature } from '../models';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

const URL_API = "http://localhost:8080/api/natures"

@Injectable()
export class NatureService {

  constructor(private _http: HttpClient) { }

  listerNatures(): Promise<Nature[]> {
    return new Promise((done, left) => {

      // récupérer la liste des natures côté serveur
      this._http.get(URL_API)
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          left(error);
        });
    });
  };

  sendNature(nature: Nature): Promise<Nature> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return new Promise((done, left) => {
      this._http
        .post(
          // URL d'accès au service
          URL_API,

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
          httpOptions
        )
        .toPromise()
        .then((data: any) => {

          //console.log(data);

          done(data);

        }, (error: any) => {

          alert("Nature déjà existante")

        });
    });
  }
}
