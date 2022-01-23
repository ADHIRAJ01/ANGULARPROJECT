import { NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';    //helps in routing inserting of components

//importing components
import { AppComponent } from './app.component';
import { ProductListComponent } from './MyComponents/product-list/product-list.component';
import { HomeComponent } from './MyComponents/home/home.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { provideRoutes, RouterModule } from '@angular/router';
import { Product2 } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';



//importing service then adding to provider
import { DishService } from './service/dish.service';
import { ProductlistService } from './service/productlist.service';
import { HeaderComponent } from './MyComponents/header/header.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { PromotionsService } from './service/promotions.service';
import { DishDetailComponent } from './MyComponents/dish-detail/dish-detail.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { FormReactiveComponent } from './MyComponents/form-reactive/form-reactive.component';




 
@NgModule({
  declarations: [                      //declare all components here 
    AppComponent, 
    ProductListComponent,
    Product2,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    DishDetailComponent,
    LoginComponent,
    FormReactiveComponent

  ],
  imports: [                            //import all modules here
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    
    MatToolbarModule,
    RouterModule.forRoot([
     
    ])
  ],
  providers: [
                                         //inserting service as providers here
    DishService,
    ProductlistService,
    PromotionsService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
