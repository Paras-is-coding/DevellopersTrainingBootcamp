import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Mycomponents/nav-bar/nav-bar.component';
import { AlarmClockComponent } from './Mycomponents/alarm-clock/alarm-clock.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { ServicesComponent } from './Mycomponents/services/services.component';
import { MeComponent } from './Mycomponents/me/me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlarmClockComponent,
    AboutComponent,
    ServicesComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
