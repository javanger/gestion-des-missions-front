import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.scss']
})
export class PopupConfirmationComponent implements OnInit {

  @Input() message: string;
  @Input() actionLabel: string;
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  make() {
    this.confirm.emit();
  }

}
