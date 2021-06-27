import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { OdersComponent } from './oders/oders.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeService } from './home/home.service';
import { OdersService } from './oders/oders.service';
import { SigninService } from './signin/signin.service';
import { RegistrationService } from './signup/registration.service';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { SelectOrderComponent } from './oders/select-order/select-order.component';
import { DeleteOrderComponent } from './oders/delete-order/delete-order.component';
import { SelectProductComponent } from './products/select-product/select-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    OdersComponent,
    ProductsComponent,
    SelectOrderComponent,
    DeleteOrderComponent,
    SelectProductComponent,
    AddProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthGuard, OdersService, SigninService, RegistrationService, ProductsService, HomeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
