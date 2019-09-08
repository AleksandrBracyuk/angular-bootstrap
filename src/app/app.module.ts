import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AComponent } from './a/a.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A21Component } from './a21/a21.component';
import { A22Component } from './a22/a22.component';
import { A23Component } from './a23/a23.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { A3Component } from './a/a3/a3.component';


@NgModule({
  declarations: [
    AComponent,
    A1Component,
    A2Component,
    A21Component,
    A22Component,
    A23Component,
    A3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AComponent]
})
export class AppModule { }
