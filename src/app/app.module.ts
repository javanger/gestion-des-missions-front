import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoNoteDeFraisComponent } from './demo-note-de-frais/demo-note-de-frais.component';
import { NoteDeFraisComponent } from './note-de-frais/note-de-frais.component';
import { AjouterLigneDeFraisComponent } from './ajouter-ligne-de-frais/ajouter-ligne-de-frais.component';
import { FormsModule } from '@angular/forms';
import { NoteDeFraisService } from './services/note-de-frais.service';
import { HttpClientModule } from '@angular/common/http';
import { GestionFraisComponent } from './gestion-frais/gestion-frais.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

  { path: 'demo', component: DemoNoteDeFraisComponent },
  { path: 'gestion-frais', component: GestionFraisComponent },
  { path: 'gestion-frais/details', component: NoteDeFraisComponent },
  { path: 'gestion-frais/details/nouveau-frais', component: AjouterLigneDeFraisComponent }
  //{ path: 'collegues/:pseudo', component: DetailsCollegueComponent },
  //{ path: '', redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    DemoNoteDeFraisComponent,
    NoteDeFraisComponent,
    AjouterLigneDeFraisComponent,
    GestionFraisComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NoteDeFraisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
