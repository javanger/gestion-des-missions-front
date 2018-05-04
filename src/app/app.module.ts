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
import { AccueilComponent } from './page/accueil/accueil.component';
import { ConnexionComponent } from './page/connexion/connexion.component';
import { ConnexionService } from './services/connexion.service';
import { AuthInterceptor } from './services/auth-interceptor.service';



const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A
  { path: 'connexion', component: ConnexionComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' } // redirige vers la route page1 par défaut
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BandeauComponent,
    AccueilComponent,
    ConnexionComponent
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
    ConnexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
