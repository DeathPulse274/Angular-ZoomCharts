import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomChartsComponent } from './zoom-charts/zoom-charts.component';
import { MapChartsComponent } from './zoom-charts/map-charts/map-charts.component';
import { NetworkChartsComponent } from './zoom-charts/network-charts/network-charts.component'
import { PieChartsComponent } from './zoom-charts/pie-charts/pie-charts.component'


const routes: Routes = [

  {path: 'zoom-chart' , component : ZoomChartsComponent ,
    children :[{path : 'pie-chart' , component : PieChartsComponent },
                {path: 'map-chart' , component : MapChartsComponent},
                {path: 'network-chart', component : NetworkChartsComponent}
              ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
