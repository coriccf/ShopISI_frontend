import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';

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
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,

  },
  //LOGIN
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
            path:'product-details',
            component: ProductDetailsComponent,
          },

          {
            path:'product-details/:id',
            component: ProductDetailsComponent,
          },

      /*    {
            path:'product-details/:id/cart',
            component: CartComponent,
          },*/


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
            path:'card/card-form',
            component: CardFormComponent,
          },
          {
            path:'card/card-form/:id',
            component: CardFormComponent,
          },
          {
            path:'card-update',
            component: CardUpdateComponent,
          },
          {
            path:'card-update/:id',
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
            path:'profile-client',
            component: ProfileClientComponent,
          },
          {
            path:'profile-client/:id',
            component: ProfileClientComponent
          },

          {
            path:'client-edit',
            component: ClientEditComponent,
          },
          {
            path:'client-edit/:id',
            component: ClientEditComponent,
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
        path:'products/for/:id',
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
        path:'user-admin-update',
        component: UserAdminUpdateComponent,
      },
      {
        path:'user-admin-update/:id',
        component: UserAdminUpdateComponent,
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
        path:'pedidos',
        component: PedidosComponent,
      },

      {
        path:'profile-view',
        component: ProfileViewComponent,
      },
      {
        path:'profile-view/:id',
        component: ProfileViewComponent,
      },


  //  ],
 // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
