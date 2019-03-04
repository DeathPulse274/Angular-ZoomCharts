import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomChartsComponent } from './zoom-charts/zoom-charts.component';
import { MapChartsComponent } from './zoom-charts/map-charts/map-charts.component';
import { PieChartsComponent } from './zoom-charts/pie-charts/pie-charts.component';
import { NetworkChartsComponent } from './zoom-charts/network-charts/network-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoomChartsComponent,
    MapChartsComponent,
    PieChartsComponent,
    NetworkChartsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
