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
import { FilterPipe1 } from './pipes Categoria/filterCategoria.pipe';
import { FilterPipe2 } from './pipes Precio/filterPrecio.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAdminComponent } from './components/user/user-admin/user-admin.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserFormComponent } from './components/user/user-admin/user-form.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { UserAdminUpdateComponent } from './components/user/user-admin-update/user-admin-update.component';
import { OrderComponent } from './order/order.component';
import { ProfileClientComponent } from './components/profile-client/profile-client.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { CardComponent } from './components/card/card.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { CardUpdateComponent } from './components/card-update/card-update.component';
import { CardFormComponent } from './components/card/card-form.component';
import { PipeCardPipe } from './pipe-card/pipe-card.pipe';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MainComponent } from './main/main.component';
import { AuthModule } from './modules/auth/auth.module';




const routes: Routes = [
  /*{ path: 'sesion', component: SesionComponent  },
  { path: 'cart', component: CartComponent  },
  { path: 'products', component: ProductsComponent  },
  { path: 'pedidos', component: PedidosComponent  },

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
  { path: 'profile-client/:id', component: ProfileClientComponent, pathMatch: 'full'},
  { path: 'client-edit/:id', component: ClientEditComponent, pathMatch: 'full'},
  { path: 'user-login', component: UserLoginComponent, pathMatch: 'full'},
  { path: 'card', component: CardComponent, pathMatch: 'full'},
  { path: 'card/:id', component: CardComponent, pathMatch: 'full'},
  { path: 'receipt', component: ReceiptComponent, pathMatch: 'full'},
  { path: 'card/card-form', component: CardFormComponent,pathMatch:'full'},
  { path: 'card/card-form/:id', component: CardFormComponent,pathMatch:'full'},
  { path: 'card-update', component: CardUpdateComponent, pathMatch:'full'},
  { path: 'card-update/:id', component: CardUpdateComponent, pathMatch:'full'},
*/

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
    FilterPipe1,
    FilterPipe,
    FilterPipe2,
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
    ProfileClientComponent,
    ClientEditComponent,
    PedidosComponent,
    UserLoginComponent,
    CardComponent,
    ReceiptComponent,
    CardUpdateComponent,
    CardFormComponent,
    PipeCardPipe,
    MainComponent,



  ],
  imports: [
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger' // set defaults here
      }),
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,
    NgxPermissionsModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
