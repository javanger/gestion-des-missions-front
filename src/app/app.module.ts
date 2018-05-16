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

@NgModule({
  declarations: [
    AppComponent,
    AjouterNatureComponent,
    DemoNatureComponent,
    DateFormatPipe,
    BooleanFormatPipe
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
