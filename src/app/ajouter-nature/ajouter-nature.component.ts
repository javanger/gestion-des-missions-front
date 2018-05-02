import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nature } from '../models';
import { NatureService } from '../services/nature.service';

@Component({
  selector: 'app-ajouter-nature',
  templateUrl: './ajouter-nature.component.html',
  styleUrls: ['./ajouter-nature.component.scss']
})
export class AjouterNatureComponent implements OnInit {

  newNature: Nature = new Nature(null);
  estFacturee: boolean = false;
  versementPrime: boolean = false;

  constructor(private serviceNature: NatureService) { }

  ngOnInit() {
    this.newNature.estFacturee = false;
    this.newNature.versementPrime = false;
  }

  choixVersementPrime() {
    console.log(this.versementPrime)
    this.versementPrime = !this.versementPrime;
  }

  afficherPourcentagePrime() {
    return this.versementPrime;
  }

  choixEstFacturee() {
    this.estFacturee = !this.estFacturee;
  }

  afficherTjm() { 
    return this.estFacturee;
  }

  submit() {
    //console.log(this.newNature)

    this.serviceNature.sendNature(this.newNature)

  }

}
