import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BandeauComponent } from './components/bandeau/bandeau.component';
import { DemoNoteDeFraisComponent } from './demo-note-de-frais/demo-note-de-frais.component';
import { NoteDeFraisComponent } from './note-de-frais/note-de-frais.component';
import { AjouterLigneDeFraisComponent } from './ajouter-ligne-de-frais/ajouter-ligne-de-frais.component';
import { NoteDeFraisService } from './services/note-de-frais.service';
import { GestionFraisComponent } from './gestion-frais/gestion-frais.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { ConnexionComponent } from './page/connexion/connexion.component';
import { ConnexionService } from './services/connexion.service';
import { AuthInterceptor } from './services/auth-interceptor.service';



const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A
  { path: 'connexion', component: ConnexionComponent },
  { path: 'demo', component: DemoNoteDeFraisComponent },
  { path: 'gestion-frais', component: GestionFraisComponent },
  { path: 'gestion-frais/details', component: NoteDeFraisComponent },
  { path: 'gestion-frais/details/nouveau-frais', component: AjouterLigneDeFraisComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' } // redirige vers la route page1 par défaut
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BandeauComponent,
    AccueilComponent,
    ConnexionComponent,
    DemoNoteDeFraisComponent,
    NoteDeFraisComponent,
    AjouterLigneDeFraisComponent,
    GestionFraisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },
    ConnexionService,
    NoteDeFraisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
