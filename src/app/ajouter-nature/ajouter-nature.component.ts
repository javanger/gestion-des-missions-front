import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Nature } from '../models';
import { NatureService } from '../services/nature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-nature',
  templateUrl: './ajouter-nature.component.html',
  styleUrls: ['./ajouter-nature.component.scss']
})
export class AjouterNatureComponent implements OnInit {

  newNature: Nature = new Nature(null);
  estFacturee: boolean = false;
  versementPrime: boolean = false;

  constructor(private serviceNature: NatureService, private router: Router) { }

  ngOnInit() {
    this.newNature.estFacturee = false;
    this.newNature.versementPrime = false;
  }

  choixVersementPrime() {
    this.versementPrime = !this.versementPrime;
  }

  afficherPourcentagePrime() {

    if (this.estFacturee) {
      return this.versementPrime;
    } else {
      return false;
    }

  }

  choixEstFacturee() {
    this.estFacturee = !this.estFacturee;

  }

  afficherFacturation() {
    return this.estFacturee;
  }

  verifiePourcentagePrime(value: number) {

    if (value > 9 || value < 0) {
      return false
    } else {
      return true;
    }
  }

  submit() {
    this.serviceNature.sendNature(this.newNature).subscribe(() =>{
      this.router.navigate(['/natureMission'])
    },(error) =>{
      alert('La nature existe déjà');
    });
  }

}
