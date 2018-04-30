import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoNoteDeFraisComponent } from './demo-note-de-frais/demo-note-de-frais.component';
import { LigneDeFraisComponent } from './ligne-de-frais/ligne-de-frais.component';
import { NoteDeFraisComponent } from './note-de-frais/note-de-frais.component';
import { SaisieNoteDeFraisComponent } from './saisie-note-de-frais/saisie-note-de-frais.component';
import { AjouterLigneDeFraisComponent } from './ajouter-ligne-de-frais/ajouter-ligne-de-frais.component';
import { FormsModule } from '@angular/forms';
import { NoteDeFraisService } from './services/note-de-frais.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemoNoteDeFraisComponent,
    LigneDeFraisComponent,
    NoteDeFraisComponent,
    SaisieNoteDeFraisComponent,
    AjouterLigneDeFraisComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [NoteDeFraisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
