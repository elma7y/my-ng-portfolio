import { TemplatesComponent } from './components/portfolio/templates/templates.component';
import { JavascriptProjetcsComponent } from './components/portfolio/javascript-projetcs/javascript-projetcs.component';
import { AngularProjetcsComponent } from './components/portfolio/angular-projetcs/angular-projetcs.component';
import { AllComponent } from './components/portfolio/all/all.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,

    children: [
      {
        path: 'all',
        component: AllComponent,
      },
      { path: 'angular-projects', component: AngularProjetcsComponent },
      {
        path: 'javascript-projects',
        component: JavascriptProjetcsComponent,
      },
      { path: 'templates', component: TemplatesComponent },
    ],
  },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
