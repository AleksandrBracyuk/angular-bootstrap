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
import { A31Component } from './a/a3/a31/a31.component';
import { A32Component } from './a/a3/a32/a32.component';
import { A33Component } from './a/a3/a33/a33.component';
import { A4Component } from './a/a4/a4.component';
import { A5Component } from './a/a5/a5.component';
import { A41Component } from './a/a4/a41/a41.component';
import { A42Component } from './a/a4/a42/a42.component';
import { A43Component } from './a/a4/a43/a43.component';
import { A51Component } from './a/a5/a51/a51.component';
import { A52Component } from './a/a5/a52/a52.component';
import { A53Component } from './a/a5/a53/a53.component';


@NgModule({
  declarations: [
    AComponent,
    A1Component,
    A2Component,
    A21Component,
    A22Component,
    A23Component,
    A3Component,
    A31Component,
    A32Component,
    A33Component,
    A4Component,
    A5Component,
    A41Component,
    A42Component,
    A43Component,
    A51Component,
    A52Component,
    A53Component
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
