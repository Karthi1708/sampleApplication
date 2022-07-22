import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonRouterOutlet } from '@ionic/angular';
import { ToastModule } from 'primeng/toast';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RandomProfilesComponent } from './components/random-profiles/random-profiles.component';
import { OptionsComponent } from './components/options/options.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RandomProfilesComponent,
    OptionsComponent,
    ProfileComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ToastModule,
    IonicModule.forRoot(),
  ],
  providers: [
    IonRouterOutlet,
    ProfileService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
