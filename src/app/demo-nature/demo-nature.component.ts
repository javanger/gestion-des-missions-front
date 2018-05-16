import { Component, OnInit, Input } from '@angular/core';
import { Nature } from '../models';
import { NatureService } from '../services/nature.service';

@Component({
  selector: 'app-demo-nature',
  templateUrl: './demo-nature.component.html',
  styleUrls: ['./demo-nature.component.scss']
})
export class DemoNatureComponent implements OnInit {

  @Input() listeNatures : Array<Nature>;

  constructor(private serviceNature: NatureService) { }

  ngOnInit() {
    this.serviceNature.listerNatures().subscribe((data:any) => {
      this.listeNatures = data;
    })
  }

}
