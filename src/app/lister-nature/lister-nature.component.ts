import { Component, OnInit, Input } from '@angular/core';
import { NatureService } from '../services/nature.service';
import { Nature } from '../models';

@Component({
  selector: 'app-lister-nature',
  templateUrl: './lister-nature.component.html',
  styleUrls: ['./lister-nature.component.scss']
})
export class ListerNatureComponent implements OnInit {

  @Input() listeNatures : Array<Nature>;

  constructor(private serviceNature: NatureService) { }

  ngOnInit() {
    this.serviceNature.listerNatures().subscribe((data:any) => {
      this.listeNatures = data;
    })  
   this.actualiser();
  }

  actualiser(){
    this.serviceNature.actualiser().subscribe((data:any) => {
      this.listeNatures = data;
    })  
  }

  supression(nature:Nature){
    this.serviceNature.deleteNature(nature.libelle).subscribe((data:any) => {
      this.listeNatures = data;
    }
    ,(error) =>{
        alert('Vous ne pouvez pas supprimer la nature');
    }); 
  }

}
