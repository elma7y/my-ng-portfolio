import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCursorModule } from 'ngx-cursor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AllComponent } from './components/portfolio/all/all.component';
import { AngularProjetcsComponent } from './components/portfolio/angular-projetcs/angular-projetcs.component';
import { JavascriptProjetcsComponent } from './components/portfolio/javascript-projetcs/javascript-projetcs.component';
import { TemplatesComponent } from './components/portfolio/templates/templates.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactUsComponent,
    SidenavComponent,
    AllComponent,
    AngularProjetcsComponent,
    JavascriptProjetcsComponent,
    TemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCursorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
