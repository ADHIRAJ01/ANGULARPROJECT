import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// we need to import all components which we want to set path
import { ProductListComponent } from './MyComponents/product-list/product-list.component';
import { Product2 } from './product-list/product-list.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { DishDetailComponent } from './MyComponents/dish-detail/dish-detail.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { FormReactiveComponent } from './MyComponents/form-reactive/form-reactive.component';

//here we give path to every component we may render , then import it underRouterModule below
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'productlist', component: ProductListComponent },
  { path: 'product2', component: Product2 },
  { path: 'home', component: HomeComponent  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'login', component: LoginComponent},
  { path: 'form', component: FormReactiveComponent},

  //defining routing params here 
  { path: 'dishdetail/:id', component: DishDetailComponent }        //to render particular we use params and here we used id
];
 
    //here we give routing path like
    /*
    path: '',                           path to be shown on site
    component: HomeComponent,           linking the path
    data: seo.default                   from where to get data 
  },
  { 
    path: 'getmedicaladvice', 
    component: GetmedicaladviceComponent, 
    data: seo.getmedicaladvice 
  },
  */
  

//here we will import routes and then export it under export section
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
