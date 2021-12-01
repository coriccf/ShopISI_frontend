import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
import { PipeCardPipe } from './pipe-card/pipe-card.pipe';
import { MainComponent } from './main/main.component';
import { AuthModule } from './modules/auth/auth.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { CardFormComponent } from './components/card/card-form.component';
import { CardUpdateComponent } from './components/card-update/card-update.component';
import { ProbadorVirtualComponent } from './components/probador-virtual/probador-virtual.component';
import { Receipt } from './components/receipt/receipt';
import { ProductBuyComponent } from './components/product-buy/product-buy.component';
import { MostBougthComponent } from './components/most-bougth/most-bougth.component';
import { MoreOrderComponent } from './components/reports/more-order/more-order.component';
import { LessOrderComponent } from './components/reports/less-order/less-order.component';
import { PedirComponent } from './components/pedir/pedir.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountInfoComponent } from './components/account/account-info/account-info.component';
import { AccountUpdateComponent } from './components/account/account-update/account-update.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },

  //LOGIN

  {
    path: 'auth',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
 /* {
    path:'auth',
    loadChildren: () =>
    import('@modules/auth/auth.module').then((m) => m.AuthModule)

  },*/

  {  path: 'auth',loadChildren: 'src/app/modules/auth/auth.modules#AuthModule' },
 // { path: 'auth', loadChildren: 'src/app/auth/auth.module#AuthModule' },


  {
    path:'user-login',
    component: UserLoginComponent,
  },
  //SIGN UP
  {
    path:'sesion',
    component: SesionComponent,
  },


  /*USER*/
  //{
   // path: 'user',

   // children: [
      {
        path:'catalogue',
        component: CatalogueComponent,
      },

          {
            path:'catalogue/product-details',
            component: ProductDetailsComponent,
          },

          {
            path:'catalogue/product-details/:id',
            component: ProductDetailsComponent,
          },

          {
            path:'cart',
            component: CartComponent ,
          },
          {
            path:'cart/:id',
            component: CartComponent,
          },

          {
            path:'order',
            component: OrderComponent,
          },
          {
            path:'order/:id',
            component: OrderComponent,
          },

          {
            path:'card',
            component: CardComponent,
          },

          {
            path:'cart/card',
            component: CardComponent,
          },

          {
            path: 'card/card-form',
            component: CardFormComponent,
          },
          {
            path: 'card-update',
            component: CardUpdateComponent,
          },
          {
            path: 'card-update/:id',
            component: CardUpdateComponent,
          },



          {
            path:'user-update',
            component: UserUpdateComponent,
          },
          {
            path:'user-update/:id',
            component: UserUpdateComponent,
          },

          {
            path:'list-clients/client-edit',
            component: ClientEditComponent,
          },
          {
            path:'list-clients/client-edit/:id',
            component: ClientEditComponent,
          },

          {
            path:'pedidos',
            component: PedidosComponent,
          },
          {
            path:'pedir',
            component: PedirComponent
          },
          {
            path:'pedir/id',
            component: PedirComponent
          },

          {
            path:'receipt',
            component: ReceiptComponent,
          },

          {
            path:'probador-virtual',
            component: ProbadorVirtualComponent,
          },
          {
            path: 'profile-client',
            component: ProfileClientComponent,
          },


  //  ],
 // },


  /*ADMIN */
 // {
   // path:'admin',

   // children:[
      {
        path:'products',
        component: ProductsComponent,
      },
      {
        path:'products/form',
        component: FormProductComponent,
      },
      {
        path:'products/form/:id',
        component: FormProductComponent,
      },

      {
        path:'user-admin',
        component: UserAdminComponent,
      },
      {
        path:'user-admin/user-form',
        component: UserFormComponent,
      },
      {
        path:'user-admin/user-form/:id',
        component: UserFormComponent,
      },
      {
        path:'user-admin/user-admin-update',
        component: UserAdminUpdateComponent,
      },
      {
        path:'user-admin/user-admin-update/:id',
        component: UserAdminUpdateComponent,
      },
      {
        path:'user-admin/profile-view',
        component: ProfileViewComponent,
      },
      {
        path:'user-admin/profile-view/:id',
        component: ProfileViewComponent,
      },



      {
        path:'categorias',
        component: CategoriasComponent,
      },
      {
        path:'categorias/form',
        component: FormCategoriaComponent,
      },
      {
        path:'categorias/form/:id',
        component: FormCategoriaComponent,
      },

      {
        path:'list-clients',
        component: ListClientsComponent,
      },
      {
        path:'list-clients/profile-client',
        component: ProfileClientComponent,
      },
      {
        path:'list-clients/profile-client/:id',
        component: ProfileClientComponent,
      },
      {  path: 'receipt',
      component: ReceiptComponent,
      },
      {  path: 'product-buy',
      component: ProductBuyComponent,
      },
      {
        path: 'most-bougth',
        component: MostBougthComponent,
      },
      {
        path:'product-buy/most-bougth',
        component: MostBougthComponent,
      },
      {
        path:'product-buy/most-bougth/:id',
        component: MostBougthComponent,
      },

      {
        path: 'more-order',
        component: MoreOrderComponent
      },
      {
        path: 'more-order/:id',
        component: MoreOrderComponent
      },

      {
        path: 'less-order',
        component: LessOrderComponent
      },
      {
        path: 'less-order/:id',
        component: LessOrderComponent
      },

      { path: 'account-info',
        component: AccountInfoComponent
      },
      { path: 'account-info/:id',
        component: AccountInfoComponent
      },
      { path: 'account-update',
        component: AccountUpdateComponent
      },
      { path: 'account-update/:id',
        component: AccountUpdateComponent
      },




  //  ],
 // },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
