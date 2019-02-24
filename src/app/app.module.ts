import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DefaultHomePageComponent } from './default-home-page/default-home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SkfComponent } from './skf/skf.component';
import { DashboardComponent } from './skf/dashboard/dashboard.component';
import { PlaceNewOrderComponent } from './skf/place-new-order/place-new-order.component';
import { FormsModule } from '@angular/forms';
// <<<<<<< HEAD
import { freeApiService } from './services/freeapi.services';
import { HttpClientModule } from '@angular/common/http';
import { Comments } from './classes/comments';

// =======
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { OrderHistoryComponent } from './skf/order-history/order-history.component';
import { CancelledOrdersComponent } from './skf/cancelled-orders/cancelled-orders.component';
import { AcceptedOrdersComponent } from './skf/accepted-orders/accepted-orders.component';
import { DelayedOrdersComponent } from './skf/delayed-orders/delayed-orders.component';
// >>>>>>> 47aba1f517554a15b199392bc2804d0fbc145e9a
//import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultHomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    TermsConditionsComponent,
    SkfComponent,
    DashboardComponent,
    PlaceNewOrderComponent,
    RawMaterialComponent,
    OrderHistoryComponent,
    CancelledOrdersComponent,
    AcceptedOrdersComponent,
    DelayedOrdersComponent,
    //NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    SidebarModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  exports : [BsDropdownModule, TooltipModule, ModalModule],
  providers: [freeApiService,Comments
],
  bootstrap: [AppComponent]
})
export class AppModule { }









