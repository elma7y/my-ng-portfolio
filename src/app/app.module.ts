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

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, PortfolioComponent, ContactUsComponent, SidenavComponent],
  imports: [BrowserModule, AppRoutingModule, NgxCursorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
