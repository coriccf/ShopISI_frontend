import { RouterModule, Routes } from '@angular/router';

import { NgModule, Pipe } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FormCategoriaComponent } from './components/categorias/form-categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { FormProductComponent } from './components/products/form-product.component';
import { FormsModule } from '@angular/forms';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAdminComponent } from './components/user/user-admin/user-admin.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserFormComponent } from './components/user/user-admin/user-form.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { UserAdminUpdateComponent } from './components/user/user-admin-update/user-admin-update.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  { path: 'sesion', component: SesionComponent  },
  { path: 'cart', component: CartComponent  },
  { path: 'products', component: ProductsComponent  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products/form', component: FormProductComponent, pathMatch: 'full' },
  { path: 'products/form/:id', component: FormProductComponent, pathMatch: 'full' },
  { path: 'catalogue', component: CatalogueComponent, pathMatch: 'full' },
  { path: 'product-details', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'product-details/:id', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'product', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'product/:id', component: ProductDetailsComponent, pathMatch: 'full'},
  { path: 'user-update', component: UserUpdateComponent, pathMatch: 'full'},
  { path: 'user-update/:id', component: UserUpdateComponent, pathMatch: 'full'},
  { path: 'user-admin', component: UserAdminComponent, pathMatch: 'full'},
  { path: 'user-admin/user-form', component: UserFormComponent, pathMatch: 'full'},
  { path: 'user-admin/user-form/:id', component: FormProductComponent, pathMatch: 'full' },
  { path: 'list-clients', component: ListClientsComponent, pathMatch: 'full'},
  { path: 'profile-view/:id', component: ProfileViewComponent, pathMatch: 'full'},
  { path: 'user-admin-update', component: UserAdminUpdateComponent, pathMatch: 'full'},
  { path: 'user-admin-update/:id', component: UserAdminUpdateComponent, pathMatch: 'full'},
  { path: 'categorias', component: CategoriasComponent  },
  { path: 'categorias/form', component: FormCategoriaComponent, pathMatch: 'full' },
  { path: 'categorias/form/:id', component: FormCategoriaComponent, pathMatch: 'full' },
  { path: 'order',component: OrderComponent, pathMatch:'full'},
  { path: 'order/:id', component: OrderComponent, pathMatch: 'full'},
  { path: 'cart/:id', component: OrderComponent, pathMatch: 'full'},

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
    FormProductComponent,
    CatalogueComponent,
    FilterPipe,
    ProductDetailsComponent,
    UserAdminComponent,
    UserUpdateComponent,
    UserFormComponent,
    ListClientsComponent,
    ProfileViewComponent,
    UserAdminUpdateComponent,
    CategoriasComponent,
    FormCategoriaComponent,
    OrderComponent,




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
