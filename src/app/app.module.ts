import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormProductComponent } from './components/products/form-product.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'sesion', component: SesionComponent  },
  { path: 'cart', component: CartComponent  },
  { path: 'products', component: ProductsComponent  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products/form', component: FormProductComponent, pathMatch: 'full' },
  
  { path: '', redirectTo: '/', pathMatch: 'full' },


];

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SesionComponent,
    CartComponent,
    ProductsComponent,
    FormProductComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
