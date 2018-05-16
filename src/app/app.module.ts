import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AjouterNatureComponent } from './ajouter-nature/ajouter-nature.component';
import { DemoNatureComponent } from './demo-nature/demo-nature.component';
import { NatureService } from './services/nature.service';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { BooleanFormatPipe } from './pipes/boolean-format.pipe';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
  { path: 'saisieNoteFrais', component: GestionFraisComponent },
  { path: 'gestion-frais/details', component: NoteDeFraisComponent },
  { path: 'gestion-frais/details/nouveau-frais', component: AjouterLigneDeFraisComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' } // redirige vers la route page1 par défaut
]

@NgModule({
  declarations: [
    AppComponent,
    AjouterNatureComponent,
    DemoNatureComponent,
    DateFormatPipe,
    BooleanFormatPipe,
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
    NatureService,
    NoteDeFraisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
