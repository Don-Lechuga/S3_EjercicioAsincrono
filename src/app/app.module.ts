import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { InputCursosComponent } from './body/input-cursos/input-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [InputCursosComponent]
})
export class AppModule { }
