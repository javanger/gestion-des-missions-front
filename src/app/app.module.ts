import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AjouterNatureComponent } from './ajouter-nature/ajouter-nature.component';
import { DemoNatureComponent } from './demo-nature/demo-nature.component';
import { NatureService } from './services/nature.service';

@NgModule({
  declarations: [
    AppComponent,
    AjouterNatureComponent,
    DemoNatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [NatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
