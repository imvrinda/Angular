import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { ViewTwoComponent } from './view-two/view-two.component';
import { ViewThreeComponent } from './view-three/view-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewOneComponent,
    ViewTwoComponent,
    ViewThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
