import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Mycomponents/about/about.component';
import { MeComponent } from './Mycomponents/me/me.component';
import { ServicesComponent } from './Mycomponents/services/services.component';
import {AlarmClockComponent} from './Mycomponents/alarm-clock/alarm-clock.component'

//yo routes array ma hamiley object create garne for every route
const routes: Routes = [
  //Component name dene afule and path tyo kaa xa tye
  {
    component:AlarmClockComponent,
    path:"alarm-clock"

  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:ServicesComponent,
    path:"services"
  },
  {
    component:MeComponent,
    path:"me"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
