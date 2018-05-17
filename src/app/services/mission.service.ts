import { Injectable } from '@angular/core';
import { MissionDetailsFrais } from '../models';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MissionService {

  constructor(private _http: HttpClient) { }

}
