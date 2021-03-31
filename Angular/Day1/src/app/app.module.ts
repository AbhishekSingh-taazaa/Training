import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { StructuraldirectivedemoComponent } from './structuraldirectivedemo/structuraldirectivedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    StructuraldirectivedemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
