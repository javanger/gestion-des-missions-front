import { Injectable } from '@angular/core';
import { MissionDetailsFrais } from '../models';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {

  constructor(private _http: HttpClient) { }

  private _ajoutMission = new Subject<MissionDetailsFrais>();

  demanderMission(mission: MissionDetailsFrais, matricule: string): void {
    const URL_API = environment.apiUrl + "api/missions/collaborateur/" + matricule;
    this._http.post<MissionDetailsFrais>(URL_API, matricule).subscribe(mission => this._ajoutMission.next(mission));
  }

  listerTransports(): Observable<string[]> {

    // récupérer la liste des transports côté serveur
    return this._http.get( environment.apiUrl + "api/missions/transports" )

      .map((data: any) => {
        return data.map((s: any) => s);
      }, (error: any) => {

        // Cas d'erreur
        
      });

  };
}
