import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from  './about-us/about-us.component';
import { ContactUsComponent }  from './contact-us/contact-us.component';
import { DefaultHomePageComponent } from './default-home-page/default-home-page.component';
import { LoginComponent } from './login/login.component'
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', component: DefaultHomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]

})
export class AppRoutingModule {
  //  route: Routes = [
  //   {path: 'login', component: LoginComponent}
  //   { path: 'login', component: LoginComponent },
  // ]
 }
